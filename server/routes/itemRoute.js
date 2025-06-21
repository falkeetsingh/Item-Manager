import express from 'express';
import multer from 'multer';
import Item from '../models/item.js';
import path from 'path';

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post(
    '/',
    upload.fields([
        {name:'coverImage',maxCount:1},
        {name:'additionalImages',maxCount:10},
    ]),
    async(req,res)=>{
        try{
            const {name,type,description} = req.body;
            if(!req.files || !req.files.coverImage){
                return res.status(400).json({error:'cover image is required.'});
            }
            const coverImage = req.files.coverImage[0].path;
            const additionalImages = req.files.additionalImages?.map(f=>f.path)||[];

            const item = new Item({
                name,
                type,
                description,
                coverImage,
                additionalImages
            });
            await item.save();

            res.status(201).json({ message: 'Item added', item });
        }catch(err){
            res.status(500).json({ error: err.message });
        }
    }
);

router.get('/', async(req,res)=>{
    const items = await Item.find().sort({_id:-1});
    res.json(items);
})

export default router;