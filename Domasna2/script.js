// 1. Celsius to Fahrenheit
let celsius = 26

function celsToFahrenheit(celsius) {
   return (celsius * 1.8) + 32
}

let fahrenheit = celsToFahrenheit(26)

//console.log(`${Math.floor(celsius)}°C pretvoreno vo Fahrenheit e ${Math.floor(fahrenheit)}°F`);

// 2. Fahrenheit to Celsius

function fahreinheitToCelsius(fahrenheit) {
   return ((fahrenheit - 32) * 5) / 9;
}

celsius = fahreinheitToCelsius(fahrenheit)

//console.log(`${Math.floor(fahrenheit)}°F pretvoreno vo Celsius e ${Math.floor(celsius)}°C `);

// 3. Feet to meters

let feet = 90

function feetToMeters(feet) {
    return feet * 0.3048;
}
let meters = feetToMeters(feet)

//console.log(`${feet} pretvoreno vo metri e ${meters}m`);

// 4. Books object

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        year: 1937,
        genre: "Fantasy" 
    },

    {
        title: "To kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        genre: "Fction" 
    },

    {
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        genre: "Self-Help" 
    }
]

// 5. Car Object

const cars = [
    {
        brand: "BMW",
        year: 1998,
        color: "Black",
        model: "E39"
    },

    {
        brand: "Mercedes",
        year: 2020,
        color: "Silver",
        model: "AMG-GT"
    }
]

// 6. Student object 

const students = [ 
    {
        name: "Stefan",
        age: 21,
        city: "Skopje",
        uni: "Sv Kliment Ohridski"
    },

    {
        name: "Pavel",
        age: 19,
        city: "Kumanovo",
        uni: "FINKI"
    }
]

// 7. Sekoj vtor neparen broj 1-100

for (i = 3; i <= 100; i+=4) {
    if(i % 2 != 0) {
        //console.log(i);
    }
}

// 8. Sekoj neparen broj 1-50

for(i = 1;i <= 50;i++) {
    if(i % 2 != 0) {
        //console.log(i); 
    }
}

// 9. Niza od 5 elementi(Gradovi)

const gradovi = ["Skopje", "Madrid", "Rim", "Lisabon", "Split" ]

// 10. Niza od 10 elementi(Drzavi)

const drzavi = ["Makedonija", "Spanija", "Italija","Portugal", "Hrvatska", "Holandija", "Svajcarija", "Brazil", "Kanada", "Norveska"]

// 11. Iteracija na niza so for 

for( i=0; i < drzavi.length; i++) {
    //console.log(drzavi[i]);
}

// 12. Povikuvanje na print funkcija za objekt vnatre vo for loop


function printBook(book)  {
    console.log(book.title);
}

for(i = 0; i < books.length; i++) {
    printBook(books[i])   
}

