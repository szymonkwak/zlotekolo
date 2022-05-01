import supertest from 'supertest';

import { app } from '~/app';

export const request = supertest(app);

const sampleToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic2FtcGxlLWlkIiwiaWF0IjoxNjUwMDIzNjk2fQ.ckeQDVU0HqNe5CRb56l7FBSOi63t81774fbiRP2BK3U';

export const authHeader = ['accessToken', sampleToken] as const;
