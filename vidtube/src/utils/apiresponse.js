// class ApiResponse{
//     constructor(statusCode,data,message="success"){
//         this.statusCode=statusCode
//         this.data=data
//         this.message=message
//         this.success=statusCode<400
//     }
// }

// export {ApiResponse}

// src/utils/apiresponse.js

export class ApiResponse {
  constructor(statusCode, message = "Success", data = null) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}
