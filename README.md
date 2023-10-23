<div style="display: flex; align-items: center;">
  <h2>Demo of a Ecommerce </h2>

</div>

<div align="center">
  <img src="https://res.cloudinary.com/dptaul20s/image/upload/v1698088629/logo-wide_m9zv3b.png" style="width: 50%" />
</div>

### Features:

#### This is an e-commerce demo made for a client. The project is done in Nodejs and ReactJs. You can test it out a little at the following link: [Gamer Store](https://gamerstore.nimohe.dev/ "Gamer Store"). The project is deployed on AWS-EC2 on the same server using nginx. The project handles roles such as user, moderator and admin; admin is the main role and admin can change users role.

### backend Dependencies:

```json
{
   "name": "backend",
   "version": "1.0.0",
   "description": "",
   "type": "module",
   "main": "index.js",
   "scripts": {
      "dev": "nodemon ./src/index.js",
      "start": "node ./src/index.js"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "dependencies": {
      "bcryptjs": "^2.4.3",
      "cloudinary": "^1.37.1",
      "cors": "^2.8.5",
      "dotenv": "^16.0.3",
      "express": "^4.18.1",
      "express-validator": "^6.14.2",
      "fs-extra": "^11.1.1",
      "jsonwebtoken": "^8.5.1",
      "mercadopago": "^1.5.17",
      "mongoose": "^6.6.4",
      "morgan": "^1.10.0",
      "multer": "^1.4.5-lts.1",
      "nodemailer": "^6.8.0"
   },
   "devDependencies": {
      "nodemon": "^2.0.20"
   }
}
```

### frontend Dependencies:

```json
{
   "name": "frontend",
   "private": true,
   "version": "0.0.0",
   "type": "module",
   "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
   },
   "dependencies": {
      "animate.css": "^4.1.1",
      "axios": "^1.3.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-icons": "^4.10.1",
      "react-multi-carousel": "^2.8.4",
      "react-router-dom": "^6.8.1"
   },
   "devDependencies": {
      "@types/react": "^18.0.17",
      "@types/react-dom": "^18.0.6",
      "@vitejs/plugin-react": "^2.1.0",
      "sass": "^1.56.1",
      "vite": "^3.1.0"
   }
}
```
