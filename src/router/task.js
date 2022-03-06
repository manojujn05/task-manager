const express = require('express')
const router  = new express.Router()
const Task = require('../models/task')


router.post('/task',async (req,res) => {
    const task = new Task(req.body)
    try {
        await task.save();
        res.send(task);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/task',async (req, res)=> {
    try {
        const task = await Task.find({});
        res.send(task);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/task/:id',async (req, res)=> {
    const _id = req.params.id;
    try {
        const task = Task.findById({_id})
        res.send(task);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['completed', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/task/:id', async (req,res) =>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task)
        {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
