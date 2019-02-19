const db = require('../db/index.js');
const request = require('supertest');
const app = require('../server/index.js');

describe('Tests Server Routes', () => {

  test('should return the response from videos endpoint', (done) => {
    return request(app).get('/videos/8').then((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].id).toBe(8);
        expect(res.body[0].title).toBe('Windler River');
        expect(res.body[0].author).toBe('Celia_Walsh');
        expect(res.body[0].plays).toBe(5255);
        done();
      });
  });

  test('should return the response from videos endpoint', (done) => {
    return request(app).get('/videos/43').then((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].id).toBe(43);
        expect(res.body[0].title).toBe('Hamill Springs');
        expect(res.body[0].author).toBe('Aaron.Schowalter');
        expect(res.body[0].plays).toBe(12471);
        done();
      });
  });

  test('should return the response from thumbnails endpoint', (done) => {
    return request(app).get('/thumbnails/72').then((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].thumbnail).toMatch(/video/);
        expect(res.body[0].thumbnail).toEqual('https://i.vimeocdn.com/video/758264042_130x73.jpg');
        done();
      });
  });

  test('should return the response from thumbnails endpoint', (done) => {
    return request(app).get('/thumbnails/96').then((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body[0].thumbnail).toMatch(/video/);
        expect(res.body[0].thumbnail).toEqual('https://i.vimeocdn.com/video/240103331_130x73.jpg');
        done();
      });
  });
});


