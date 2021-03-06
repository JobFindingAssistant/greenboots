const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  status:{
    type: String
  },

  location: {
    type: String
  },
  bio: {
    type: String
  },
  skills: {
    type: [String],
    required: true
  },

  experience: [
    {
      from: {
        type: Date,
        require: true
      },
      location: {
        type: String
      },
      trails: {
        type: String
        // required: true
      },

      description: {
        type: String
      }
    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
