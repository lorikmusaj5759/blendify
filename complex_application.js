// Filename: complex_application.js
// Content: A complex application that simulates a social media platform

class User {
  constructor(name, username, password) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.friends = [];
  }

  addFriend(user) {
    this.friends.push(user);
    user.friends.push(this);
    console.log(`${this.name} and ${user.name} are now friends.`);
  }

  postStatus(status) {
    console.log(`${this.name} posted: ${status}`);
  }

  likePost(user, status) {
    console.log(`${this.name} liked ${user.name}'s post: ${status}`);
  }
}

class Post {
  constructor(user, content) {
    this.user = user;
    this.content = content;
    this.likes = 0;
  }

  addLike() {
    this.likes++;
  }
}

const user1 = new User("Jane Doe", "jane.doe", "password123");
const user2 = new User("John Smith", "john.smith", "abc123");

user1.addFriend(user2);

const post1 = new Post(user1, "Hello world!");
const post2 = new Post(user2, "This is a complex application in JavaScript.");

user1.postStatus("I'm enjoying this complex application!");
user2.likePost(user1, "I like your status.");

post1.addLike();
post1.addLike();

console.log(`Post from ${post1.user.name}: ${post1.content}`);
console.log(`Likes: ${post1.likes}`);