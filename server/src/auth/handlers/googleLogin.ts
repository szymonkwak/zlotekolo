import passport from 'passport';

export const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });
