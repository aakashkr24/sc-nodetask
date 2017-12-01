# **sc-nodetask**

## Setup
git clone https://github.com/aakashkr24/sc-nodetask.git

cd sc-nodetask

npm install

npm start #To Run the Application

npm test #To Run the Test Suite

## APIs (available routes)

### 1. **Login**:
  
 * **Method**: POST
 * **Path**: /login
 * **Response**: Type: *JSON*
 ```javascript
 {
 	message: "User Authentication Successful",
 	response: {
 		token: <JWT_TOKEN>
 	}
 }
 ```
       
### 2. **Apply JSON Patch**:
  * **Method**: PUT
  * **Path**: /jsonpatch
  * **Parameter**: Type: JSON. Keys:
    * json (Type: JSON)
    * patch (Type: JSON)
  * **Headers**: 
    Authorization: Bearer <**JWT_TOKEN**>
  * **Response**: Type: *JSON*
  ```javascript
  {
  	message: "JSON Patch successfully applied",
  	response: {
  		result: <PATCHED_JSON Type = JSON>
  	}
  }
  ```     
       
### 3. **Thumbnail**:
  * **Method**: GET
  * **Path**: /thumbnail
  * **Query Parameter**: url- Public image url (encoded URI string). E.g. url=https%3A%2F%2Fwww.google.co.in%2Fimages%2Fbranding%2Fgooglelogo%2F1x%2Fgooglelogo_color_272x92dp.png
  * **Headers**: 
    Authorization: Bearer <**JWT_TOKEN**>
  * **Response**: Attached Thumbnail
