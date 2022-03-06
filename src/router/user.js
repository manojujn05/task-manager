const express = require('express')
const router  = new express.Router()
const User = require('../models/Users')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try{
        await user.save();
        res.send(user);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get('/user', async (req, res)=> {
    try{
        const user = await User.find({});
        res.send(user);
    } catch(e){
        res.status(500).send(e)
    }
})

router.get('/user/:id', async (req, res)=> {
    const _id = req.params.id;
    try {
        const user = User.findById({_id})
        res.send(user);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.delete('/user/:id', async (req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;