const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost",
    {
        useMongoClient: true
    }
);

const userSeed = [
    {
        name: "Sarah",
        description: "This lady likes to dance and have fun",
        date: new Date(Date.now())
    },
    {
        name: "Pierce",
        description: "This Guy has a fat head and funny teeth",
        date: new Date(Date.now())
    },
    {
        name: "Rick",
        description: "This guy needs to stop eating, he is just getting so big",
        date: new Date(Date.now())
    },
    {
        name: "Brittany",
        description: "This girl is just another Brittany, we all know a Brittany she is just anotther typical Brittany",
        date: new Date(Date.now())
    },
];

db.Users
.remove({})
.then(() => db.Users.collection.insertMany(userSeed))
.then(data => {
    console.log(data.insertedIds.length + "records inserted");
})
.catch(err => {
    console.log(err);
    process.exit(1);
});