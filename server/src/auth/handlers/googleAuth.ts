/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { User } from '@prisma/client';
import passport from 'passport';
import { Strategy } from 'passport-google-oauth2';

import { prisma } from '~/common/prisma';

interface GoogleProfileResponse {
  provider: string;
  id: string;
  displayName: string;
  email: string;
  picture: string;
}

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
      passReqToCallback: true,
    },
    async (
      request: unknown,
      accessToken: string,
      refreshToken: unknown,
      profile: GoogleProfileResponse,
      done: (err: unknown, user: User | null) => void
    ) => {
      try {
        let user = await prisma.user.findUnique({ where: { id: profile.id } });
        if (!user) {
          user = await prisma.user.create({
            data: {
              id: profile.id,
              username: profile.displayName,
              nickname: profile.displayName,
              email: profile.email,
              avatar: profile.picture,
            },
          });
        }
        done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);
