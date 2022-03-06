const mongoose = require('../src/db/mongoose');
const Task = require('../src/models/task');
// var ObjectID = require('mongodb').ObjectID;
// Task.findByIdAndDelete("6220ab2a9c2f1a2c74d3f1ed").then(()=>{
//     return Task.countDocuments({ completed : false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
  const res = await Task.findByIdAndDelete( id );
  const result = await Task.countDocuments({ completed : false});
  return result  
}

deleteTaskAndCount("622170ae5f8cbf34c8bcea66").then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

