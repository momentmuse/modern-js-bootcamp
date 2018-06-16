const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to get country');
        }
    }).then((data) => {
        return country = data.find((country) => country.alpha2Code === countryCode);
    })
}

const getLocation = () => {
    return fetch('https://ipinfo.io/json?token=e1bb4a6a4526e5').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to get location from IP')
        }
    })
}