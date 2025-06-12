function startMAchine() {
    return console.log(`Bzzz... machine starting...`)
}

function coffee(){
    return console.log(`coffee is warming up`)
}

function ready() {
    return console.log(`Drink is ready.!`)
}

function iWantCoffee(){
    startMAchine();
    coffee();
    ready();
}
iWantCoffee()