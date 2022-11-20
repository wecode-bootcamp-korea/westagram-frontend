// please edit user data here
class Person {
  constructor(name, imageUrl, comment) {
    this.listName = name;
    this.listImage = 'url'+'('+imageUrl+')';
    this.listRealName = comment;
  }
}

const wecode1 = new Person(
  "we_are_beer",
  "/students/40th/woojin/story_image/beer-g499257807_640.jpg",
  "beer Kim"
);
const wecode2 = new Person(
  "we_are_cake",
  "/students/40th/woojin/story_image/cake-g46e278bc6_640.jpg",
  "cake Lee"
);
const wecode3 = new Person(
  "wecode",
  "/students/40th/woojin/story_image/code-ga3929d1d3_640.jpg",
  "wecode!!!!!!"
);
const wecode4 = new Person(
  "we_love_rabbits",
  "/students/40th/woojin//main_recommendation_image/rabbits-g43fed7b42_640.jpg",
  "rabbits Woo"
);
const wecode5 = new Person(
  "we_drink_coffee",
  "/students/40th/woojin//main_recommendation_image/coffee-beans-ga1f41b6c8_640.jpg",
  "caffein Choi"
);
const wecode6 = new Person(
  "we_go_vacation",
  "/students/40th/woojin/main_recommendation_image/beach-g3c80eed35_640.jpg",
  "holiday Jang"
);
const wecode7 = new Person(
  "we_profile123",
  "/students/40th/woojin/main_article_image/flower_profile.jpg",
  "woojin Lim"
);


// don't forget add the name of new data in here
const searchListArr = [
  wecode1,
  wecode2,
  wecode3,
  wecode4,
  wecode5,
  wecode6,
  wecode7,
];
