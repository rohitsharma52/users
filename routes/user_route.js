const express = require('express');
const router = express.Router();
const User = require('../model/user.js');

// POST request to create a new user
router.post('/', async (req, res) => {
  try {
    const getdata = req.body;
    const newdata = new User(getdata);
    const savedata = await newdata.save();
    console.log('Data save successful');
    res.status(201).json(savedata);
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data', error: error.message });
  }
});

// GET request to fetch all users
router.get('/', async (req, res) => {
  try {
    const all_data = await User.find();
    console.log('Data see successful');
    res.status(200).json(all_data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ message: 'Error retrieving data', error: error.message });
  }
});

// GET request to fetch a user by link_name
router.get('/:link_name', async (req, res) => {
  const link_name = req.params.link_name;
  try {
    const response = await User.findOne({ name: link_name });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
});
router.put('/:id',async(req,res)=>{
const id=req.params.id;

  try {
    const response = await User.findOneAndUpdate(
      { _id: id }, 
      req.body, 
      { new: true }
    );
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }
  catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }

});
router.delete('/:id',async(req,res)=>{
  const id=req.params.id.trim();
  try{
const response=await User.findOneAndDelete({_id:id});
if (response) {
  res.status(200).json({ message: 'User deleted successfully' });
} else {
  res.status(404).json({ message: 'User not found' });
}
  }
 catch (error) {
console.error('Error deleting user:', error);
res.status(500).json({ message: 'Error deleting user', error: error.message });
}

});

module.exports = router;
