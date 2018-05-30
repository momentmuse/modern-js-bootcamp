let restaurant = {
    name: 'Cafe Gatsby',
    guestCapacity: 40,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(seatPeople) {
        this.guestCount += seatPeople;

    },
    removeParty: function(removePeople) {
        this.guestCount -= removePeople;
    }
}

//make Methods for:
//seatParty
//removeParty

restaurant.seatParty(35)
console.log(restaurant.checkAvailability(6))
restaurant.removeParty(8)
console.log(restaurant.checkAvailability(6))