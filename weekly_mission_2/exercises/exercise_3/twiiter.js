export default class Twitter {
    constructor(id, name, author, numberOfFriends, numberOfPhotos, tweets, following, followers, likes, location) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.numberOfFriends = numberOfFriends;
        this.numberOfPhotos = numberOfPhotos;
        this.tweets = tweets;
        this.following = following;
        this.followers = followers;
        this.likes = likes;
        this.location = location;
    }

    getTotalTweets() {
        return this.tweets.length;
    }
    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
    getlikes() {
        return `This account have ${this.likes} likes`
    }
}