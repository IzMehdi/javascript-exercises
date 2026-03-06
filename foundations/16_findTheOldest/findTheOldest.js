const currentYear = new Date().getFullYear();

const findTheOldest = function(people) {
    let newPeople = []
    for (let person of people){
        let name = person.name
        let age = (person.yearOfDeath ?? currentYear) -person.yearOfBirth
        let newPerson = {name, age}
        newPeople.push(newPerson)
    }
    newPeople.sort((a,b) => b.age-a.age)
    return newPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
