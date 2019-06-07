const express = require('express'); 
const router = express.Router(); 

// CRUD Routes


//@route GET endpoint api/contacts
//@desc Get all users contacts
//@access Private
router.get('/', (req, res) => {
    res.send('Get all users'); 
}); 

//@route POST endpoint api/contacts
//@desc Add new contact
//@access Private
router.get('/', (req, res) => {
    res.send('Add contact'); 
}); 

//@route PUT endpoint api/contacts/:id
//@desc  update contact
//@access Private
router.put('/:id', (req, res) => {
    res.send('update contact'); 
}); 

//@route DELETE endpoint api/contacts/:id
//@desc  delete contact
//@access Private
router.delete('/:id', (req, res) => {
    res.send('delete contact'); 
}); 

module.exports = router; 