# Video Player Service

> video player for vimeo clone group project.

## Table of Contents

- [1. Related Projects](#1-Related-Projects)
- [2. Usage](#2-Usage)
  - [2.1 API](#21-Main-API-Endpoints)
  - [2.2 CRUD](#22-Other-CRUD-Endpoints)
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

> The following endpoints return mock video data to be consumed by all three microservices: 

- GET `/videos/:id`
  - Reads id, title, author, video_url, and number of plays where the video document's ID matches the supplied id.
- GET `/thumbnails/:id`
  - Reads title, author, and thumbnail from the db. This endpoint can handle multiple ids as long as they are sent with '%2C', a comma, in-between them.

## 2.2 Other CRUD Endpoints

> The following endpoints create, update, and delete documents on the database: 

- POST `/videos`
  - Creates and inserts a new video document with an incrementing ID into the database

- PUT `/videos/:id`
  - Updates a video document at the supplied ID with new data

- DELETE `/videos/:id`  
  - Deletes one video document at the supplied ID
  

## 3. Development

> This Service uses the following tech stack:
  
- Server: Node v10.14.1 (with Express)
- Deployment: AWS Elastic Beanstalk + S3
- Client: React
- Database: PostgreSQL (see installation below)
- Testing: Jest

- Important packages and libs:
  - ReactPlayer
  - ReactIcons
  - ReactStrap
  
## 3.1 PostgreSQL installation

> PostgreSQL can be installed via Homebrew. The pg documentation has a plethora of other installation methods if you would like. Also, here is an [article](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04) that might prove useful for installing PostgreSQL on linux.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

