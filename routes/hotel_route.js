const express=require('express');
const router=express.Router();
const Hotel = require('../model/hotel_model.js');
const User = require('../model/user.js');
router.post('/',async(req,res)=>{
const hoteldata=req.body;
try{ 
       const save_data=new Hotel(hoteldata);   
          const response= await save_data.save();
          console.log('hotel data insert sucessfull');
          res.status(201).json(response);
}
catch (error) {
          res.status(500).json({ message: error.message }); // Added error handling
      }
});
router.get('/',async(req,res)=>{
     try{
          const get_data=await Hotel.find();
          console.log('data featch sucessfull');
          res.status(200).json(get_data);
     }   
     catch (error) {
          res.status(500).json({ message: error.message }); // Added error handling
      } 
});
router.put('/:id',async(req,res)=>{
  const id=req.params.id;
  try{
       const response=await Hotel.findOneAndUpdate(
          {_id:id},
          req.body,
          {new:true}
       );
       console.log('your data update sucessfull');
     res.status(201).json(response);  
  }
  catch (error) {
          res.status(500).json({ message: error.message }); // Added error handling
      } 
});
router.delete('/:id',async(req,res)=>{
 const id=req.params.id;
 try{
     const response=await Hotel.findOneAndDelete(
          {_id:id}
     );
     res.status(201).json({message:'your data delted sucessfull'});

 }
 catch (error) {
          res.status(500).json({ message: error.message }); // Added error handling
      } 
})
module.exports=router;


