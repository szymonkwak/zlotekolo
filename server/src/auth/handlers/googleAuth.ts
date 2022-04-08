import passport from 'passport';

import { prisma } from '~/common/prisma';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
      passReqToCallback: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
      console.log(profile);
      try {
        const user = await prisma.user.findUnique({ where: { id: '50e6c9ac-2550-4ecf-9a5a-54ce33b8b820' } });
        return done(user);
      } catch (err) {
        return done(err);
      }

      // TODo create or find user in DB

      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
passport.deserializeUser((user: any, done) => {
  done(null, user);
});
