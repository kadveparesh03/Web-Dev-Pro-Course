// import { v2 as cloudinary } from 'cloudinary';
// import exp from 'constants';
// import fs from "fs";


// (async function() {

//     // Configuration
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY , 
//         api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
//     });
    
// })

// const uploadOnClooudinary = async(localFilePath)=>{
//     try {
//         if(!localFilePath)return null
//         const response = await cloudinary.uploader.upload(
        
//             localFilePath,{
//                 resource_type:"auto"
//             }
//         )
//         console.log("File uploaded on clodinary . file src:" + response.url)

//         // once  the file is uploaded
//         fs.unlinkSync(localFilePath)
//         return response
        
        
//     } catch (error) {
//         fs.unlinkSync(localFilePath)
//         return null
//     }
// }

// const deleteFromCloudinary= async (publicId)=> {
//     try {
//         const result = await cloudinary.uploader.destroy(publicId)
//         console.log("Delted from clodinary public id")
        
//     } catch (error) {
//         console.log("Error deleting from cloduinary")
        
//     }
// }

// export {uploadOnClooudinary}

import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

// 🛠️ Configuration (run immediately)
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// 📥 Upload function
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File uploaded to Cloudinary. File URL: " + response.url);

        // Delete local file after upload
        fs.unlinkSync(localFilePath);

        return response;

    } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        fs.unlinkSync(localFilePath);
        return null;
    }
};

// 🗑️ Delete function
const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Deleted from Cloudinary. Public ID:", publicId);
        return result;
    } catch (error) {
        console.error("Error deleting from Cloudinary:", error);
        throw error;
    }
};

// 📦 Export both functions
export { uploadOnCloudinary, deleteFromCloudinary };
