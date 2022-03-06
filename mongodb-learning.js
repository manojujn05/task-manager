// CRUD create read update delete

const {MongoClient, ObjectId}  = require('mongodb')
// const MongoClient = mongodb.MongoClient
var ObjectID = require('mongodb').ObjectID;


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // })

    // db.collection('task').insertMany([
    //     { descripton: 'First task', completed: true },
    //     { descripton: 'Second task', completed: true },
    //     { descripton: 'Third task', completed: true }
    // ], (error, result)=>{
    //     if(error){
    //         console.log("Error in insert");
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').findOne({ name: 'Andrew'}, (error, user)=>{
    //     if(error){
    //         return console.log("Error in find");
    //     }
    //     console.log(user)
    // })  
    // db.collection('task').findOne({ _id: new ObjectId("6215e4b4fcf1862388f93923")}, (error, task)=>{
    //     if(error){
    //         return console.log("Error in find")
    //     }

    //     console.log(task)
    // })

    // db.collection('task').find({ completed: true }).toArray((error, task)=>{
    //     if(error){
    //         return console.log("Error in find")
    //     }

    //     console.log(task)
    // })
    // db.collection('task').updateOne({
    //     _id: new ObjectID("6215e4b4fcf1862388f93923")
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('task').updateMany({
    //        completed: false
    //     }, { $set: {
    //                 completed: true
    //             }
    //         }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('task').deleteOne({
        descripton: "First task"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})