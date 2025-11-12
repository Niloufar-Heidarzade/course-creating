const {Schema , model} = require("mongoose");

const userSchema = new Schema ({
  name : {
    type : String,
    required : [true , "name is required"]
  },
  email : {
    type : String,
    required : [true , "email is required"],
    unique : [true , "this email is already in use"],
    match : [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/]
  },
  password : {
    type : String,
    required : [true , "password is required"]
  },
  verified : {
    type : Boolean,
    default : false
  }
})

module.exports = model("users" , userSchema);