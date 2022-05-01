import { StatusCodes } from 'http-status-codes';

import { prismaMock } from '~/common/tests/prisma';
import { authHeader, request } from '~/common/tests/utils';

const setupTestUser = () => {
  prismaMock.user.findUnique.mockResolvedValue({
    id: 'sample-id',
    username: 'Krzysztof',
    nickname: 'Krzychu',
    email: 'krzy@szt.of',
    avatar: 'sample-avatar',
    contractType: 'OTHER',
    toWorkDistance: 4,
    isConfigured: false,
  });
};

const createDate = (day: number, month: number, year: number) => new Date(year, month - 1, day, 12);

describe('POST trip', () => {
  describe('authorized user', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    beforeEach(async () => {
      setupTestUser();
      jest.setSystemTime(createDate(2, 5, 2022)); //Monday
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('when there are no trips should save the trip to database and return success', async () => {
      const payload = {
        tripType: 'TO_WORK',
        date: Date.now(),
      };

      prismaMock.trip.findMany.mockResolvedValue([]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(StatusCodes.CREATED);
    });

    it('when trip is submitted for a weekend should not save the trip and return error', async () => {
      jest.setSystemTime(createDate(1, 5, 2022)); //Sunday
      const payload = {
        tripType: 'TO_WORK',
        date: Date.now(),
      };

      prismaMock.trip.findMany.mockResolvedValue([]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(0);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.text).toEqual('W weekend nie pracujemy:)');
    });

    it('when there is trip of the same type at the same date should not save the trip and return error', async () => {
      const payload = {
        tripType: 'TO_WORK',
        date: Date.now(),
      };

      prismaMock.trip.findMany.mockResolvedValue([
        { id: '1', createdAt: new Date(), dayOfTrip: new Date(), type: 'TO_WORK', userId: 'sample-id' },
      ]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(0);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    it('when there is trip of the diffrent type at the same date should save the trip to database and return success', async () => {
      const payload = {
        tripType: 'TO_WORK',
        date: Date.now(),
      };

      prismaMock.trip.findMany.mockResolvedValue([
        { id: '1', createdAt: new Date(), dayOfTrip: new Date(), type: 'TO_HOME', userId: 'sample-id' },
      ]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(StatusCodes.CREATED);
    });

    it('when trip TO_WORK is submitted on the next business day should not save the trip and return error', async () => {
      const payload = {
        tripType: 'TO_WORK',
        date: createDate(29, 4, 2022),
      };

      prismaMock.trip.findMany.mockResolvedValue([]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(0);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
      expect(response.text).toEqual('Już nie możesz dodać trasy, za poźno');
    });

    it('when trip TO_HOME is submitted on the next business day should save the trip and return success', async () => {
      const payload = {
        tripType: 'TO_HOME',
        date: createDate(29, 4, 2022), //Friday
      };

      prismaMock.trip.findMany.mockResolvedValue([]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(1);
      expect(response.status).toBe(StatusCodes.CREATED);
    });

    it('when trip TO_HOME is submitted after two business days should not save the trip and return error', async () => {
      const payload = {
        tripType: 'TO_HOME',
        date: createDate(28, 4, 2022), //Thursday
      };

      prismaMock.trip.findMany.mockResolvedValue([]);

      const response = await request
        .post('/api/scoring/trips/')
        .send(payload)
        .set(...authHeader);

      expect(prismaMock.trip.create).toHaveBeenCalledTimes(0);
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });
  });
});
