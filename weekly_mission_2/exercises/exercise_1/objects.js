console.log('\n--------------------------------------------------------------------------');

const repo = {
    name: "LaunchX",
    author: "DannRamirez",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


console.log('\n--------------------------------------------------------------------------');
const twitterProfile = {
    id: 89448989494886648,
    name: "LaunchX",
    author: "DannRamirez",
    numberOfFriends: 1235,
    numberOfPhotos: 100,
    tweets: [{
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        },
        {
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        },
        {
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        }
    ],
    following: 199,
    followers: 199,
    likes: 19,
    location: "UK",

    getTotalTweets: function () {
        return this.tweets.length;
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    },
    getlikes: function () {
        return `This account have ${this.likes} likes`
    }
}

console.log("Nombre del perfil:" + twitterProfile.name)
console.log("Numero de Tweets: " + twitterProfile.getTotalTweets())
console.log(twitterProfile.getlikes())


console.log('\n--------------------------------------------------------------------------');
const facebookProfile = {
    id: 654651351321,
    name: "LaunchX",
    author: "DannRamirez",
    numberOfFriends: 1235,
    numberOfPhotos: 100,
    posts: [{
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        },
        {
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        },
        {
            id: 894489894948,
            Text: "Lorem",
            date: '07/05/22',
            image: 'http://'
        }
    ],
    friends: 199,
    likes: 184,
    location: "UK",
    school:"IPN",
    biography:"Lorem",

    getPosts: function () {
        return JSON.stringify(this.posts);
    },
    getGeneralInfo: function () {
        return `Hi! I'm ${this.author} and ${this.biography}`
    },
    getlikes: function () {
        return `This account have ${this.likes} likes`
    }
}

console.log("Nombre del perfil:" + facebookProfile.name)
console.log("Posts: " + facebookProfile.getPosts())
console.log(facebookProfile.getlikes())


console.log('\n--------------------------------------------------------------------------');
const uberProfile = {
    id: 89448989494886648,
    userName: "LaunchX",
    name: "DannRamirez",
    numberOfRides: 1235,
    rating:4.56,
    rides: [{
            id: 894489894948,
            City: "Lorem",
            Street: "Lorem",
            CP: 22626,
            date: '07/05/22',
        },
        {
            id: 894489894948,
            City: "Lorem",
            Street: "Lorem",
            CP: 22626,
            date: '07/05/22',
        },
        {
            id: 894489894948,
            City: "Lorem",
            Street: "Lorem",
            CP: 22626,
            date: '07/05/22',
        },
    ],

    getTotaRides: function () {
        return this.rides.length;
    },
    getGeneralInfo: function () {
        return `${this.name} had ${this.numberOfRides} of rides in the app and ${this.rating} of rating`
    },
    getAdress: function () {
        return `Recent adress: ${JSON.stringify(this.rides)}`
    }
}

console.log("Nombre del usuario :" + uberProfile.userName);
console.log("Viajes totales: " + uberProfile.getTotaRides());
console.log(uberProfile.getAdress());
