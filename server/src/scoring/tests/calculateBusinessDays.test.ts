import { calculateBusinessDays } from '../services/score';

describe('Calculate business days in month', () => {
  it('Should return 21 days for May 2022', () => {
    expect(calculateBusinessDays('2022_05')).toBe(21);
  });
  it('Should return 21 days for June 2022', () => {
    expect(calculateBusinessDays('2022_06')).toBe(21);
  });
  it('Should return 21 days for July 2022', () => {
    expect(calculateBusinessDays('2022_07')).toBe(21);
  });
  it('Should return 21 days for August 2022', () => {
    expect(calculateBusinessDays('2022_08')).toBe(22);
  });
  it('Should return 21 days for September 2022', () => {
    expect(calculateBusinessDays('2022_09')).toBe(22);
  });
  it('Should return 21 days for October 2022', () => {
    expect(calculateBusinessDays('2022_10')).toBe(21);
  });
  it('Should return 21 days for November 2022', () => {
    expect(calculateBusinessDays('2022_11')).toBe(20);
  });
});
