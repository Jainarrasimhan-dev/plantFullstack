import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js'


const userRouter = express.Router();


userRouter.post(
    '/register',
    expressAsyncHandler(async(req, res) => {    
        console.log(req.body,"ppppp")
        const creatingNewUser = new User({
            email: req.body.email,
            password:req.body.password,
            gender:req.body.gender,
            first_name:req.body.firstName,
            last_name:req.body.lastName
        });
        const createdUser = await creatingNewUser.save();
        res.send({
            _id: createdUser._id,
            email: createdUser.email,
        });
    })
);




export default userRouter