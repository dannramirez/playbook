export default class Facebook {
    constructor(id, name, author, numberOfFriends, numberOfPhotos, posts, friends, likes, location, school, biography) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.numberOfFriends = numberOfFriends;
        this.numberOfPhotos = numberOfPhotos;
        this.posts = posts;
        this.friends = friends;
        this.likes = likes;
        this.location = location;
        this.school = school;
        this.biography = biography;
    };

    getPosts() {
        return JSON.stringify(this.posts);
    };
    getGeneralInfo() {
        return `Hi! I'm ${this.author} and ${this.biography}`
    };
    getlikes() {
        return `This account have ${this.likes} likes`
    };
}