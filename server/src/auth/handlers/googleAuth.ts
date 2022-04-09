import { User } from '@prisma/client';
import passport from 'passport';

import { prisma } from '~/common/prisma';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const GoogleStrategy = require('passport-google-oauth2').Strategy;

interface GoogleProfileResponse {
  provider: string;
  id: string;
  displayName: string;
  picture: string;
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
      passReqToCallback: true,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (request: any, accessToken: any, refreshToken: any, profile: GoogleProfileResponse, done: any) => {
      // console.log(profile);
      try {
        const user = await prisma.user.findUnique({ where: { id: profile.id } });
        if (!user) {
          // TODO create user in DB
          const newUser = await prisma.user.create({
            data: { id: profile.id, username: profile.displayName, nickname: profile.displayName, avatar: profile.picture },
          });
          console.log('Stworzono nowego usera w DB: ' + newUser.nickname);
          done(null, newUser);
        } else {
          console.log('User był w bazie: ' + user.nickname);
          done(null, user);
        }
      } catch (err) {
        console.log('error: ' + err);
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: User, done) => {
  done(null, user);
});
