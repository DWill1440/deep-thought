const { Schema, model } = require("mongoose");
const moment = require("moment");

const UserShema = new Schema({
  //username
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
      type: String,
      required: [true, "Email required"],
      unique: true,
      lowercase: true,
      match: [ /.+@.+\..+/, "Please enter a valid email"]
    },

  thoughts: [],

  friends: []  
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

UserShema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserShema);

module.exports = User
