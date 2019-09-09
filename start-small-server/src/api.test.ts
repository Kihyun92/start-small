import { app } from './tests/bootstrap';

describe('API test', () => {
  it('returns 200 status code', async () => {
    const res = await app
      .get('/');

    expect(res.status).toBe(200);
    expect(res.body).toBe('Hello, world!');
  });
});