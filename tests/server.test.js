'use strict';

const supertest = require('supertest');
const app = require('../src/server').app;
const request = supertest(app);

describe('Server Tests', () => {
  describe('GET requests', () => {
    it('Responds with status code 200 to generic slash route', async () => {
      const response = await request.get('/');
      expect(response.status).toEqual(200);
    });

    test ('Hello route works as expected', async () => {
      const response = await request.get('/hello');
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Hello World');
    });
  });
});
