import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'        



cloudinary.config({ 
  cloud_name : CLOUDINARY_CLOUD_NAME, 
  api_key :CLOUDINARY_API_KEY , 
  api_secret: CLOUDINARY_API_SECRET 
});

const uploadCloudinary =async(localFilePath) => {
    try{
        if(!localFilePath)return null
       
        const response = await cloudinary.uploader.upload(loacalFilePath,{
            response_type:"auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary",response.url);
        return response;
    
    }
    catch(error){
        fs.unlinkSync(localFilePath)//remove the saved filed file from local
        return null  
    }
}


export {uploadCloudinary}