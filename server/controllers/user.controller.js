const bcrypt = require("bcryptjs");
const User = require("../models/user");
const SALT_WORK_FACTOR = 10;

const hashPassword = (password, callback) => {
  bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
    if (saltError) {
      throw saltError;
    } else {
      try {
        bcrypt.hash(password, salt, callback);
      } catch (error) {
        console.log(error);
      }
    }
  });
};

const hashAndUpdateAllPassword = async (fn) => {
  const session = await User.startSession();

  await session.withTransaction(async () => {
    const users = await User.find();

    users.forEach((row) => {
      hashPassword(row.password, async function (hashError, hash) {
        if (hashError) {
          // throw hashError;
          fn({ error: hashError });
        } else {
          // console.log({ id: row._id, hash });
          await User.updateOne({ _id: row._id }, { password: hash });
          // fn(new Error("error on hash process"));
        }
      });
    });
  });

  session.endSession();
};

const login = ({ login, password }, next) => {
  if(!login || !password) return next(new Error("Erreur Login: Login ou mot de passe absent"));
  
  User.findOne({ login: login }).exec((error, user) => {
    if (error) return next(error);
    if (!user)
      return next(new Error("Erreur Login: Utilisateur non trouvé"));

    user.comparePassword(password, function (error, match) {
      if (error) return next(error);
      if (!match) return next(new Error("Erreur Login: Le login ou le mot de passe est erroné"));

      next(null, user);
    });
  });
};

module.exports = {
  hashPassword,
  hashAndUpdateAllPassword,
  login,
};
