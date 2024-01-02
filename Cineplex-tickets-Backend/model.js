class Model {
    constructor() {

        this.seats = [false,false,false,false,false,false,false,false,false,false]

    }
    getData() {
        return this.seats
    }
    getSeat(i){
        return this.seats[i]
    }

    setSeats(i) {
        if (this.seats[i] === true) {
            this.seats[i] = false
        }else {
            this.seats[i] = true
        }
    } 

}

exports.Model = Model

// npm install cors

// npm install -g nodemon -> nodemon ./index.js 8080