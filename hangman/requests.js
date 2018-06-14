const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            resolve(data.puzzle);
        } else if (e.target.readyState === 4) {
            reject(`An error has occured, could not fetch puzzle`);
        }
    });

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
});

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find((country) => country.alpha2Code === countryCode);
            resolve(country);
        } else if (e.target.readyState === 4) {
            reject('There was an error! Cannot find country.');
        }
    });
    
    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
    countryRequest.send();
});

