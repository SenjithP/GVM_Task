ABOUT THE TASK
The provided repo is created as a part of GVM technologies Task and here it is a small application where admins/vendors can Add/Edit/Delete products and user have authentication and authorization and can search products.

API'S CREATED
User_Register: http://localhost:8000/api/auth/register (POST Method)

User_Login: http://localhost:8000/api/auth/login (POST Method)

Add_Product: http://localhost:8000/api/product/addProduct (POST Method)

Edit_Product:http://localhost:8000/api/product/editProduct?id=_id (PATCH Method)

Delete_Product:http://localhost:8000/api/product/deleteProduct (DELETE Method)

Search_Product:http://localhost:8000/api/product/searchProduct?query=value (GET Method)


HOW YOU CAN ACCESS IT
Clone the project: git clone https://github.com/SenjithP/GVM_Task.git

cd server

npm start


And thats all about the project. Happy Cloning!

NB:While checking with postman as of user authentication details was saved in localstorage and at present I didint use JWT, SearchingProduct will show "You are not authenticated". after clonning by removing middleware from search route we can easily search based on query.

