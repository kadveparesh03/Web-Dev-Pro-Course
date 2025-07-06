import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary ,deleteFromCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiresponse.js";
import jwt from "jsonwebtoken";
import { app } from "../app.js";
import mongoose from "mongoose";


const generateAccessaAndRefreshToken=async (userId)=> {
 try {
   const user=await User.findById(userId)
   //Small check for user 
 
   user.generateToken()=user.generateAccessToken()
   user.refreshToken()=user.generateRefreshToken()
 
   user.refreshToken=refreshToken
   await user.save({validateBeforeSave: false})
   return {accessToken,refreshToken}
 } catch (error) {
  throw new ApiError(500, "Something went wrong while generating access and refresh tokens")
  
 }

} 

const registerUser = asyncHandler(async (req, res) => {
  const { fullname, email, username, password } = req.body;

  if ([fullname, username, email, password].some((field) => !field?.trim())) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  console.warn(req.files)
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverLocalPath = req.files?.coverImage?.[0]?.path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is missing");
  }

  // const avatar = await uploadOnClooudinary(avatarLocalPath);
  // let coverImage = "";
  // if (coverLocalPath) {
  //   coverImage = await uploadOnClooudinary(coverLocalPath);
  // }

  let avatar;
  try {
    avatar=await uploadOnCloudinary (avatarLocalPath)
    console.log("Uploaded avatar",avatar)
  } catch (error) {
    console.log("Error uploading  avatar", error)
    throw new ApiError(500, "failed to upload avatar")
  }

   let coverImage;
  try {
    coverImage=await uploadOnCloudinary (coverLocalPath)
    console.log("Uploaded cover image",coverImage)
  } catch (error) {
    console.log("Error uploading coverImage", error)
    throw new ApiError(500, "failed to  uploadcoverImage")
  }

  try {
    const user = await User.create({
      fullname,
      avatar: avatar.url,
      coverImage: coverImage?.url || "",
      email,
      password,
      username: username.toLowerCase(),
    });
  
    const createdUser = await User.findById(user._id).select("-password -refreshToken");
    if (!createdUser) {
      throw new ApiError(500, "Something went wrong while registering user");
    }
  
    return res
      .status(201)
      .json(new ApiResponse(201, createdUser, "User registered successfully"));
  } catch (error) {
    console.log("User Creation Failed")

    if(avatar){
      await deleteFromCloudinary(avatar.public_ida)
    }
    if(coverImage){
      await deleteFromCloudinary(coverImage.public_id)
    }
    throw new ApiError(500, "Something went wring while registerign a user and images were deleted")
    
  }
});


const loginUser=asyncHandler(async(req,res)=>{
  // get a data from body
  const {email,username,password}=req.body

  //validation

  if(!email){
    throw new ApiError(400, "Email is required")
  }
const user= awaitUser.findOne({
  $or: [{username},{email}]
})

if(!user){
    throw new ApiError(400, "User Not Found")
  }

  // validate Password

   const isPasswordValid=await user.isPasswordCorrect(password)

   if(!isPasswordValid){
    throw new ApiError(400, "Invalid credentials")
  }

  const {accessToken,refreshToken}=await generateAccessaAndRefreshToken(user._id)

  const loggedInUser= await User.findById(user._id)
  .select("-password -refreshToken");


  const options= {
    httpOnly :true,
    secure: process.env.MODE_ENV === "production"
  }

   return res
   .status(200)
   .cookie("AccessToken",accessToken,options)
   .cookie("refreshToken",refreshToken,options)
   .json( new ApiResponse(
    200,
    {user:loggedInUser,accessToken,refreshToken},
    "User logged in successfully"
  
  ))

})


const logoutUser=asyncHandler(async(req,res)=>{
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set:{
        refreshToken: undefined,

      }
      
    },{
      new:true
    }

    
  )


  const options = {
    httpOnly:true,
    secure:process.env.NODE_ENV=== "production",
  }

  return res 
  .status(200)
  .clearCookie("AccessToken",options)
  .clearCookie("refreshtoken",options)
  .json(new ApiResponse(200,{},"User Looged out successfully"))

})

const refreshAccessToken= asyncHandler(async(req,res)=> {
  const incomingRefreshToken= req.cookies.refreshToken || req.body.refreshToken

  if (!incomingRefreshToken){
    throw new ApiError(401, "Refresh token is required")
  }


  try {
    const decodedToken=jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    )
    
    const user=await User.findById(decodedToken?._id)
    if(!user){
      throw new ApiError(401,"Invalid refresh Token")
    }

    if (incomingRefreshToken!== user?.refreshToken){
      throw new ApiError(401, "Invalid refresh token")
    }

    const options={
      httpOnly:true,
      secure:process.env.NODE_ENV==="production",
    }

    const {accessToken,refreshToken: newRefreshToken}=await generateAccessaAndRefreshToken(user._id)
    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",newRefreshToken,options)
    .json(
      200,
      {
        accessToken,
        refreshToken:newRefreshToken
      },
      "Access token refreshed successfully"
    )


  } catch (error) {
    throw new ApiError(500,"Something went wrong while refreshing acces token")
    
  }

})

const changeCurrentPassword= asyncHandler (async (req,res)=>{
  const {oldPassword,newPassword}= req.body

  const user=await User.findById(req.user?._id)

  const isPasswordCorrect= await user.isPasswordCorrect(oldPassword)

  if(!isPasswordCorrect){
    throw new ApiError(401,"Old Password is incorrect")
  }

  user.password= newPassword;

  await user.save({validateBeforeSave:false})

  return res.status(200).json(new ApiResponse(200,{},"Password changed successfully"))

})

const getCurrentUser= asyncHandler (async(req,res)=>{
  return res.status(200).json(new ApiResponse(200,req.user, "Current user Details"))
})


const updateAccoutDetails= asyncHandler(async(req,res)=>{
  const {fullname,email}= req.body

  if(!fullname || !email){
    throw new ApiError(400,"fullname and email are required")
  }
User.findById()

  const user= await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set:{
        fullname,
        email:email
      }
    },
    {new:true}

    
  ).select("-password -refreshToken")
  return res.status(200).json (new ApiResponse(200,user,"Accout details are updated successfully"))



})

const updateUserAvatar= asyncHandler(async(req,res)=>{
  const avatarLocalPath=req.files?.path

  if(!avatarLocalPath){
    throw new ApiError(400, "File is required")
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)

  if(!avatar.url){
    throw new ApiError(500,"Something went wrong while uploading avatar")
  }

  const user=await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set:{
        avatar: avatar.url
      }
    },
    {new:true}
  ).select("-password  - refreshToken")

  res.status(200).json (new ApiResponse (200,user,"Avatar updated successfully"))

})

const updateUserCoverImage= asyncHandler(async(req,res)=>{
  const coverLocalPath=req.file?.path

  if(!coverImageLocalPath){
    throw new ApiError(400, "FIle is required")
  }

  const coverImage=await uploadOnCloudinary (coverImageLocalPath)

  if(!coverImage.url){
    throw new ApiError(500, "somwthing went wrong")
  }

  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set:{
        coverImage:coverImage.url
      }
    },
      {new:true}
  ).select("-password -refreshToken")

  return res.status(200).json (new ApiResponse(200,user,"CoverImage Successfully "))
})

const getUserChannelProfile = asyncHandler(async(req,res)=>{
  const {username}=req.params

  if(!username?.trim()){
    throw new ApiError(400,"Uername is required")
  }

  const channel = await User.aggregate(
    [
      {
        $match:{
          username: username?.toLowerCase()
        }
      },
      {
        $lookup:{
          from :"subscriptions",
          localField:"_id",
          foreignField:"channel",
          as:"subscribers"
        }
      },
      {
        $lookup:{
          from:"subscriptions",
          localField:"_id",
          foreignField:"subscriber",
          as:"subscriberedTo"
        }
        
      },{
        $addFields:{
          subscribersCount:{
            $size:"subscribers"
          },
          channelSubscribedToCounts:{
            $size:"$subscriberedTo"
          },
          isSubscribed:{
            $cond:{
              if:{$in:[req.user?._id,"$subscribers.subscriber"]},
              then:true,
              else:false
            }
          }
        }
      },
      {
        //project only the nexessory data
        $project:{
          fullname:1,
          username:1,
          avatar:1,
          subscribersCount:1,
          channelSubscribedToCounts:1,
          isSubscribed:1,
          coverImage:1
        }
      }
    ]
  )
  
  if(!channel?.length){
    throw new ApiError(404,"Channke not found")
  }
  return res.status(200).json(new ApiResponse(200,
    channel[0],
    "channell profile fetched successfully"
  ))
})

const getWatchHistory= asyncHandler(async(req,res)=>{
  const user = await User.aggregate([
    {
      $match:{
        _id:new mongoose.Types.ObjectId(req.user?._id)
      }
    },
    {
      $lookup:{
        from:"videos",
        localField:"watchHistory",
        foreignField:"_id",
        as:"watchHistory",
        pipeline:[
          {
            $lookup:{
              from:"videos",
              localField:"watchHistory",
              foreignField:"_id",
              as:"owner",
              pipeline:{
                $project:{
                  fullname:1,
                  username:1,
                  avatar:1
                }
            }
            }
          },{
          $addFields:{
            owner:{
              $first:"$owner"
            }
          }
          }
        ]

      }
    }

  ])

  return res.status(200).json(new ApiResponse(200,user[0]?.watchHistory,"Watch History fetched successfully"))
})


export { 
  registerUser ,
  loginUser ,
  refreshAccessToken,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateAccoutDetails,
  updateUserAvatar,
  updateUserCoverImage,
  getUserChannelProfile,
  getWatchHistory

};
