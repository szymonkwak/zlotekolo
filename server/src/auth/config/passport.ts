import passport from 'passport';

import { getGoogleAuthStrategy } from './googleStrategy';

passport.use(getGoogleAuthStrategy());
