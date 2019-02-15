const faker = require('faker');
const fs = require('fs');

// keep track of id's for JSON data
let counter = 1;
let authors = ['Madeline Sharafian','Rudy Wilms', ''];

/*
video urls:
1.'https://player.vimeo.com/video/65107797'
2.'https://player.vimeo.com/video/316284002'
3.'https://player.vimeo.com/video/78110105'
4.'https://player.vimeo.com/video/117747482'
5.'https://player.vimeo.com/video/54802209'
6.'https://player.vimeo.com/video/35159390/'
7.'https://player.vimeo.com/video/25658743/'
8.'https://player.vimeo.com/video/89009039/'
9.'https://player.vimeo.com/video/688779/'
10.https://player.vimeo.com/video/7977632/
*/

/*
video titles and authors:
1.'Omelette', 'Madeline Sharafian'
2. "ROCKY MOUNTAIN NATIONAL PARK", 'Rudy Wilms'
3.'Burton Presents BACKCOUNTRY [SNOWBOARDING]'  'Burton Snowboards'
4.'hiking.', 'fruitjuicer films'
5.'DYNAMIC NATURE', 'Morten Berg'
6.'Nature', 'Antonio De Rosa AIC-IMAGO'
7.'Nature', 'Chris.B'
8.'4K Nature', 'HD Nature Video by LoungeV'
9.'Nature','AlexeiP'
10. 'Nature Time Lapse III', 'mockmoon'
*/


/*
Thumbnails:
1.'https://i.vimeocdn.com/video/435992078_130x73.jpg'
2.'https://i.vimeocdn.com/video/758264042_130x73.jpg'
3.'https://i.vimeocdn.com/video/453451270_130x73.jpg'
4."https://i.vimeocdn.com/video/504556356_130x73.jpg"
5."https://i.vimeocdn.com/video/497536567_130x73.jpg"
6."https://i.vimeocdn.com/video/240103331_130x73.jpg"
7."https://i.vimeocdn.com/video/169092890_130x73.jpg"
8."https://i.vimeocdn.com/video/499453777_130x73.jpg"
9."https://i.vimeocdn.com/video/51685906_130x73.jpg"
10."https://i.vimeocdn.com/video/35989560_130x73.jpg"
*/


