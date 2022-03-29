const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  birth_date: {
    type: Date,
    required: true,
  },
  profile_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
});

UserSchema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
});

UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(error, match) {
    if (error) {
      return callback(error)
    } else {
      callback(null, match)
    }
  })
}

module.exports = mongoose.model("User", UserSchema, "user");
