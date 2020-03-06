// requiring mongoose so that we can use the package/library
const mongoose = require('mongoose');

// using mongoose to connect to the local MongoDB database Server
mongoose.connect("mongodb://localhost:27017/user-mongooseDB", { useNewUrlParser: true, useUnifiedTopology: true});
// and conects to the user-mongooseDB database.
// IF the database doesn't exist, mongoose will create it.

// this specifies the structure the documents will have to follow
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// creating a model using the schema, this will create a collection
// called mongooseUsers (s added by mongoose)
const User = mongoose.model("mongooseUser", userSchema);


//creates an User Object instance which will follow the schema in the model
// this will be added to the collection as a document below (user.save()).
const user = new User({
  name: "Joshua",
  age: 24
});


// this will add the user data as a document to the mongooseUsers collection
// in the user-mongooseDB databse
user.save();
