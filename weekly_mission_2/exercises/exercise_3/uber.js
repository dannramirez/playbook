export default class Uber {
    constructor(id, userName, name, numberOfRides, rating, rides) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.numberOfRides = numberOfRides;
        this.rating = rating;
        this.rides = rides;
    }
    getTotaRides() {
        return this.rides.length;
    }
    getGeneralInfo() {
        return `${this.name} had ${this.numberOfRides} of rides in the app and ${this.rating} of rating`
    }
    getAdress() {
        return `Recent adress: ${JSON.stringify(this.rides)}`
    }
}