const cities = [
  { 
    name: "Skopje", 
    population: 526000 
},
  {
     name: "Belgrade",
      population: 1370000 
    },
  { 
    name: "Sofia",
     population: 1280000 
    },

  {
    name: "Bitola",
    population: 450000
  },
  
  {
    name: "Madrid",
    population: 2350000
  },

  {
    name: "Amsterdam",
    population: 1430000
  },

  {
    name: "Astana",
    population: 1120000
  }
];

// 2. Podredi po populacija

const highestPopulation =  cities.sort((a , b) => {
    return b.population - a.population
})


console.log(highestPopulation);

// 3. Trite najnaseleni gradovi


cities.sort((a, b) => b.population - a.population)

const top3 = cities.slice(0, 3)

console.log(top3);

// 4. Site gradovi sto pocnuvaat na A i nad milion ziteli

const startsWithA = cities.filter(c => c.name[0] == "A" && c.population > 1000000)
console.log(startsWithA);

// 5. Prosek od vkupen broj ziteli

const total = cities.reduce((sum, city) => (sum + city.population) , 0)

const avgPopulation = total / cities.length

console.log(Math.floor(avgPopulation));



