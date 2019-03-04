# Video Player Service

> video player for vimeo clone group project.

## Table of Contents

1.1 [Related Projects](#Related Projects)
1.2 [Usage](#Usage)
1.3 [API](#API Endpoints)
2. [Requirements](#requirements)
3. [Development](#development)

## 1.1 Related Projects

  - Related Videos: https://github.com/rpt11-spider-n-sleet/felipe-service
  - Description/Comments: https://github.com/rpt11-spider-n-sleet/huy-service

## 1.1 Usage

> This service contains a video player and video player nav-bar widgets. To coincide with these two widgets there are a few respective endpoints that interact with a postgreSQL database in order to display mock data about the videos. This service acts as the, "source of truth" for the other microservices in this project. 

**Video Player**

**Video Player Nav-bar**

## 1.2 API Endpoints

>The following endpoints return mock video data to be consumed by all three microservices: 

- GET `/videos/:id`
  - Retrieves id, title, author, video_url, and plays where the id matches the passed in id from the initial request.
- GET `/thumbnails/:id`
  - Retrieves title, author, and thumbnail from the db. This endpoint can handle multiple ids as long as they are sent with '%2C', a comma, in-between them.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v10.14.1
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

