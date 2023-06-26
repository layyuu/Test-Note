console.log("This is BBC")

fetch('https://restcountries.com/v3.1/all')
    .then((res) => { res.json() })
    .then((data) => { console.log(data) })
    .catch((err) => { console.log(err) })