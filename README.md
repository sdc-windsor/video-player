# Video Player Service

> Video player for vimeo clone group project.

## Table of Contents

- [1. Related Projects](#1-Related-Projects)
- [2. Usage](#2-Usage)
  - [2.1 API](#21-Main-API-Endpoints)
- [3. Development](#3-development)

## 1 Related Projects

  - Related Videos: https://github.com/sdc-windsor/video-recommendations
  - Descriptions/Comments 1: https://github.com/sdc-windsor/video-descriptions-sadie
  - Descriptions/Comments 2: https://github.com/sdc-windsor/video-descriptions-jason


  - Original Related Videos: https://github.com/rpt11-spider-n-sleet/felipe-service
  - Original Description/Comments: https://github.com/rpt11-spider-n-sleet/huy-service

## 2 Usage

> This service contains a video player and video player nav-bar widgets. To coincide with these two widgets there are a few respective endpoints that interact with a postgreSQL database in order to display mock data about the videos. This service acts as the, "source of truth" for the other microservices in this project.

**Video Player**
![](vidplayersmall.gif)

**Video Player Nav-bar**
![](VidNavSm.gif)

## 2.1 Main API Endpoints

> The following endpoints create, update, and delete documents on the database:

- POST `/videos`
  - Creates and inserts a new video document with an incrementing ID into the database
  - Returns the new video document containing the video url, thumbnail url, title, author, play count, and id.

###### Returns mock video data consumed by all three microservices
- GET `/videos/:id`
  - Reads a video document where the id matches the supplied id.
  - Returns a video document containing containing the video url, thumbnail url, title, author, play count, and id.

###### Returns mock video data consumed by all three microservices
- GET `/thumbnails/:id`
  - Reads video documents where the id matches the supplied id.  This endpoint can handle multiple ids as long as they are sent with '%2C', a comma, in-between them.
  - Returns video documents containing title, author, and thumbnail url.

- GET `/videos`
  - Reads the first 100 video documents starting from {id: 1}, in ascending order if ?page=PAGENUMBER query is not supplied
  - Returns video documents containing the video url, thumbnail url, title, author, play count, and id.

- PUT `/videos/:id`
  - Updates a video document at the supplied ID with new data
  - Returns the updated video document containing the video url, thumbnail url, title, author, play count, and id.

- DELETE `/videos/:id`
  - Deletes one video document at the supplied ID


## 3. Development

> This Service uses the following tech stack:

- Server: Node >=10.14.1, Express ^4.16.4
- Deployment: AWS Elastic Beanstalk + S3
- Client: React ^16.8.1
- Database: PostgreSQL ^7.8.0 (see installation below), or MongoDB ^3.1.13
- Testing: Jest ^24.1.0

- Important packages and libs:
  - ReactPlayer ^1.9.3
  - ReactIcons ^3.4.0
  - ReactStrap ^7.1.0

## 3.1 PostgreSQL installation

> PostgreSQL can be installed via Homebrew. The pg documentation has a plethora of other installation methods if you would like. Also, here is an [article](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04) that might prove useful for installing PostgreSQL on linux.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

