const JwtStrategy = require("passport-jwt").Strategy;
const ExtractStrategy = require("passport-jwt").ExtractJwt;
const db = require("../models");
const fs = require("fs");
const path = require("path");

const pathToKey = path.join(__dirname, "../..", "id_rsa_pub.pem");
const PUBLIC_KEY = fs.readFileSync(pathToKey, "utf8");

const options = {
  jwtFromRequest: ExtractStrategy.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUBLIC_KEY,
  algorithms: ["RS256"],
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, (payload, done) => {
      db.user
        .findOne({ where: { id: payload.sub } })
        .then((user) => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch((error) => {
          done(error, null);
        });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    db.user
      .findOne({ where: { id: id } })
      .then((user) => {
        done(null, user);
      })
      .catch((error) => {
        done(error);
      });
  });
};
