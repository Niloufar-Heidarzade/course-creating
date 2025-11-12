const {Schema , model} = require("mongoose");

const courseSchema = new Schema ({
  title: {
    type : String,
    required : [true , "title is required"],
  },
  category : String,
  slug : String,
  authorId : {
    type : Schema.Types.ObjectId,
    ref : "users",
    required : [true , "authorId is required"]
  }
});

module.exports = model("courses" , courseSchema);