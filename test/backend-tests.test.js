const request = require('supertest');
const db = require('../db/index.js');
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

  test('should return the response from a different videos endpoint', (done) => {
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

  test('should return response from a different thumbnails endpoint', (done) => {
    return request(app).get('/thumbnails/96').then((res) => {
      expect(res.body).toHaveLength(1);
      expect(res.body[0].thumbnail).toMatch(/video/);
      expect(res.body[0].thumbnail).toEqual('https://i.vimeocdn.com/video/240103331_130x73.jpg');
      done();
    });
  });
});

describe('Test Database Schema', () => {
  test('should contain a videos table', (done) => {
    expect(db).toBeDefined;
    return db.schema.hasTable('videos').then((exists) => {
      expect(exists).toBeTruthy;
      done();
    });
  });

  test('videos table should contain video_data columns', (done) => {
    const columnData = {
      id: {
        type: 'integer',
        maxLength: null,
        nullable: false,
        defaultValue: 'nextval(\'videos_id_seq\'::regclass)',
      },
      video_url: {
        type: 'character varying',
        maxLength: 255,
        nullable: true,
        defaultValue: null,
      },
      thumbnail: {
        type: 'text',
        maxLength: null,
        nullable: true,
        defaultValue: null,
      },
      title: {
        type: 'character varying',
        maxLength: 50,
        nullable: true,
        defaultValue: null,
      },
      author: {
        type: 'character varying',
        maxLength: 50,
        nullable: true,
        defaultValue: null,
      },
      plays: {
        type: 'integer',
        maxLength: null,
        nullable: true,
        defaultValue: null,
      },
    };
    return db('videos').columnInfo().then((info) => {
      expect(info).toMatchObject(columnData);
      done();
    });
  });
});
