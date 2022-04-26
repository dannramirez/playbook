import Facebook from "./facebook.js";
import GitHub from "./github.js";
import Twitter from "./twiiter.js";
import Uber from "./uber.js";


console.log('\n--------------------GitHub----------------------------------------------------');
const gitHubUser = new GitHub("LaunchX", "DannRamirez", "JavaScript", 100, 199, 299, 10, 10);
console.log("Nombre del repo:" + gitHubUser.name);
console.log("Issues totales: " + gitHubUser.getTotalIssues());
console.log(gitHubUser.getGeneralInfo());

console.log('\n---------------------Twitter--------------------------------------------------');
const twitterUser = new Twitter(89448989494886648, "LaunchX", "DannRamirez", 1235, 100, [{
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
], 199, 199, 19, "UK");
console.log("Nombre del perfil:" + twitterUser.name);
console.log("Numero de Tweets: " + twitterUser.getTotalTweets());
console.log(twitterUser.getlikes());

console.log('\n---------------------Facebook-------------------------------------------------');
const facebookUser = new Facebook(654651351321, "LaunchX", "DannRamirez", 1235, 100, 12, 199, 184, "UK", "IPN", "Lorem");
console.log("Nombre del perfil:" + facebookUser.name);
console.log("Posts: " + facebookUser.getPosts());
console.log(facebookUser.getlikes());

console.log('\n---------------------Uber-----------------------------------------------------');
const uberUser = new Uber(89448989494886648, "LaunchX", "DannRamirez", 1235, 4.56, [{
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
]);
console.log("Nombre del usuario :" + uberUser.userName);
console.log("Viajes totales: " + uberUser.getTotaRides());
console.log(uberUser.getAdress());