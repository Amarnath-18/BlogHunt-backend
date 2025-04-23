import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

dotenv.config();
const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'https://blog-hunt-frontend.vercel.app'
];

// CORS configuration
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
}));

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

// Set secure cookie options
app.use((req, res, next) => {
    res.cookie('cookieName', 'cookieValue', {
        secure: true,
        sameSite: 'none',
        domain: '.onrender.com' // Adjust if your domain is different
    });
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
    res.send("Api is Running..");
});

connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
