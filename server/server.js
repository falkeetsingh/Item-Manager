import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/itemRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;


// Static uploads path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(cors());
app.use(express.json());
app.use('/api/items', itemRoutes);

if (process.env.NODE_ENV === 'production') {
  
    const frontendBuildPath = path.resolve(__dirname, '..', 'dist');
    
    app.use(express.static(frontendBuildPath));

    app.get('*', (req, res) => {
      res.sendFile(path.join(frontendBuildPath, 'index.html'));
    });
  }
  

app.listen(PORT,()=>{
    console.log("server is running on 5000");
})