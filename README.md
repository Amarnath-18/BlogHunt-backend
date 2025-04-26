# BlogHunt Backend

The backend server for BlogHunt, providing RESTful API endpoints for the blog platform.

## Tech Stack

- Node.js with Express 5.1.0
- MongoDB with Mongoose 8.13.2
- JWT for authentication
- Cloudinary for image hosting
- Express-fileupload for file handling

## Prerequisites

- Node.js (Latest LTS version recommended)
- MongoDB instance
- Cloudinary account
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

3. Start development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/userProfile/:id` - Get user profile
- `PUT /api/auth/changePassword` - Change password (protected)
- `PUT /api/auth/userUpdate` - Update profile (protected)

### Blogs
- `POST /api/blogs` - Create new blog (protected)
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `PUT /api/blogs/:id` - Update blog (protected)
- `DELETE /api/blogs/:id` - Delete blog (protected)
- `PUT /api/blogs/like/:id` - Toggle like on blog (protected)
- `GET /api/blogs/users/:userId` - Get user's blogs

### Comments
- `POST /api/blogs/:id/comment` - Add comment (protected)
- `DELETE /api/blogs/:blogId/comment/:commentId` - Delete comment (protected)
- `PUT /api/blogs/:blogId/comment/:commentId` - Edit comment (protected)

### Media Upload
- `PUT /api/upload/profilePic` - Upload profile picture (protected)
- `PUT /api/upload/blogImage` - Upload blog image (protected)

## Environment Variables

- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT
- `PORT` - Server port (default: 5000)
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

## Security Features

- JWT-based authentication
- Protected routes with middleware
- Password hashing with bcrypt
- Secure cookie handling
- CORS configuration
- File upload restrictions
- Input validation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request