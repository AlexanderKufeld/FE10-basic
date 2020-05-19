function showUsersTable(persons = []) {
    console.log(persons);
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let maxAge = 0;
    let minAge = 0;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age = sortedPersons) {
            maxAge = persons[i].age;
        }else{
            return minAge = persons[i].age;
        }
    }
    console.log('Max age of person:' + maxAge);
    document.getElementById("max").innerHTML = 'Max age: ' + maxAge;

    console.log('Min age of person:' + minAge);
    document.getElementById("min").innerHTML = 'Min age: ' + minAge;

    let averageAge = 0;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].lastName + '</td><td>' + sortedPersons[i].firstName + '</td><td>' + sortedPersons[i].age + '</td></tr>';
        console.log('Person ' + (i + 1) + ': LastName = ' + sortedPersons[i].lastName + ': FirstName = ' + sortedPersons[i].firstName + ' Age = ' + sortedPersons[i].age);
        averageAge += + sortedPersons[i].age;
    }
    averageAge /= +persons.length;

document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
console.log('Average age of person:' + averageAge + ', max age: ' + maxAge + ', min age: ' + minAge);
document.querySelector('tfoot div.alert').innerHTML = 'Average age: <b>' + averageAge + '</b>, max age: <b>' + maxAge + '</b>, min age: <b>' + minAge + '</b>';


const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);

for (let i = 0; i < personsNumber; i++) {
    setTimeout(function() {
        const person = {};
       
        person.firstName = prompt('Please enter Firstname of  ' + (i + 1) + ' person');
        person.lastName = prompt('Please enter Lastname of ' + (i + 1) + ' person');
        person.age = prompt('Please enter Age of ' + (i + 1) + 'person');
        persons[i] = person;
        for (let i = 0; i < personsNumber; i++) {
            showUsersTable(persons);
        }
    }, 500);
}
}
