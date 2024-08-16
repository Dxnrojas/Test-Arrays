//1.

const tasks =[
    {
        id: 1,
        name: 'Task 1',
        stay: false
    },
    {
        id: 2,
        name: 'Task 2',
        stay: false
    },
    {
        id: 3,
        name: 'Task 3',
        stay: false
    },
    {
        id: 4,
        name: 'Task 4',
        stay: false
    },
    {
        id: 5,
        name: 'Task 5',
        stay: false
    },
    {
        id: 6,
        name: 'Task 6',
        stay: false
    },
    {
        id: 7,
        name: 'Task 7',
        stay: false
    },
    {
        id: 8,
        name: 'Task 8',
        stay: false
    },
    {
        id: 9,
        name: 'Task 9',
        stay: false
    },
    {
        id: 10,
        name: 'Task 10',
        stay: false
    }
]

const filteredTasks = (id) => {

    tasks.forEach(task => {
        if(task.id === id){
            task.stay = "True"  
        }
    });

    return tasks;
}

console.log(filteredTasks(2));


//2.

const countries = [
    {
        name: "Norway",
        population: 650
    },
    {
        name: "Australia",
        population: 600
    },
    {
        name: "London",
        population: 700
    },
    {
        name: "Spain",
        population: 300
    },
    {
        name: "Russia",
        population: 900
    },
]

const filteredCountries = (countries) => {
    let maxPopulation = countries[0];

    countries.forEach(country => {
        if(country.population > maxPopulation.population){
            maxPopulation = country;
        }
    });

    return maxPopulation;
}

console.log(filteredCountries(countries));