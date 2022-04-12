import passport from 'passport';

const ROUTE_AFTER_FAILURE = `${process.env.CLIENT_URL}/`;

export const googleAuthMiddleware = passport.authenticate('google', { session: false, failureRedirect: ROUTE_AFTER_FAILURE });
