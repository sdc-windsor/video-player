DROP DATABASE videos;

CREATE DATABASE videos;

DROP TABLE videos;

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  video_url VARCHAR(255),
  thumbnail TEXT,
  title VARCHAR(50),
  author VARCHAR(50),
  plays INT NOT NULL,
);
