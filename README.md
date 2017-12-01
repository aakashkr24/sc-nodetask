# **sc-nodetask**

## Setup
git clone https://github.com/aakashkr24/sc-nodetask.git

cd sc-nodetask

npm install

npm start #To Run the Application

npm test #To Run the Test Suite

## Application Port & Sample Curls

Application runs on PORT 4096. Change PORT with NODE_ENV.PORT

Sample Curls:
* Login: curl -X POST http://localhost:4096/login -d 'username=aaa&password=bbbbbbbbbbb'
* JSON Patch: curl -X PUT http://localhost:4096/jsonpatch -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTIxMjkzMTQsImV4cCI6MTUxMjEyOTkxNH0.WJwmJuv7e0t-pDyvqu369nxfIJml5QrLeHGEtHz_HKw' -H 'content-type: application/json' -d '{"json" : {},"patch": [{"op": "add", "path": "/foo", "value": "bar"}]}'
* Thumbnail: curl -X GET 'http://localhost:4096/thumbnail?url=https%3A%2F%2Fblog.socialcops.com%2Fwp-content%2Fuploads%2F2015%2F11%2FPicture1-1100x496.jpg' -H 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MTIxMjM2NTYsImV4cCI6MTUxMjEyNDI1Nn0.pyUKUu9Xiw0DpAh0VXuPzPDgLOcd0_GIEfuGGXmftbw' 


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
