// import { asyncHandler } from "../utils/asynchandler";
// import {ApiError} from "../utils/ApiError.js"
// import { use } from "react";
// import {User} from "../models/user.model.js"
// import { uploadOnClooudinary } from "../utils/cloudinary";
// import { ApiResponse } from "../utils/apiresponse";
// import { ApiResponse } from "../utils/apiresponse.js";

// const registerUser= asyncHandler(async (req,res)=>{
//     const {fullname,email,username,password}=req.body

//     //validation

//     if(
//         [fullname,username,email.password].some((Field)=> field?.trim()=== "")
//     ){
//         throw new ApiError(400,"All fields are required")
//     }

//     const existedUser=await User.findOne({
//     $or:[{username},{email}]
// })

//     if (existedUser){
//         throw new ApiError(409, "User with email or user name all ready exist")
//     }

//         const avatarLocalPath=req.files?.avatar[0]?.path
//         const coverLocalPath=req.files?.coverImage[0]?.path

//         if(!avatarLocalPath){
//             throw new ApiError(400,"Avatar file is missing ");
            
//         }

//         const avatar=await uploadOnClooudinary(avatarLocalPath)
//         let coverImage=""
//         if(coverLocalPath){
//         const coverImage=await uploadOnClooudinary(coverImage)
//         }

//             const user=await User.create({
//                 fullname,
//                 avatar: avatar.url,
//                 coverImage: coverImage?.url || "",
//                 email,
//                 password,
//                 username: username.toLowerCase()

//             })

//             const createdUser =await User.findById(use._id).select(
//                 "-password - refreshToken"
//             )
//             if (!createdUser){
//                             throw new ApiError(500,"Something went wrong while registering user ");

//             }

//             return res
//             .status(201)
//             .json(new ApiResponse(200,createdUser,"User registered successfully"))

// })

// export {
//     registerUser
// }
import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary ,deleteFromCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiresponse.js";


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

export { registerUser };
