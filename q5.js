

const employees = [
    { name: "Aarav Sharma", age: 25, salary: 4200, dob: "1999-03-12" },
    { name: "Riya Verma", age: 28, salary: 5500, dob: "1996-07-25" },
    { name: "Kunal Mehta", age: 32, salary: 7800, dob: "1992-01-18" },
    { name: "Sneha Gupta", age: 24, salary: 3900, dob: "2000-09-03" },
    { name: "Rohit Singh", age: 35, salary: 9200, dob: "1989-11-14" },

    { name: "Gaurav Pathak", age: 37, salary: 990, dob: "1987-04-21" },
    { name: "Nandini Joshi", age: 25, salary: 460, dob: "1999-12-10" },
    { name: "Rakesh Chauhan", age: 43, salary: 1300, dob: "1981-06-07" },
    { name: "Ishaan Malhotra", age: 27, salary: 580, dob: "1997-02-18" },
    { name: "Komal Arvind", age: 30, salary: 710, dob: "1994-09-04" }
];


// part-1
//      filter all employees with salary greater than 5000

const employeeWithSalGreaterThan5000 = employees.filter(
    emp => emp.salary > 5000
);

// console.log(employeeWithSalGreaterThan5000);


// part-2
// group employee on the basis of their age


// Assuming there are 3 groups - young, middleAge , seniors

const youngEmp = [];
const middleAge = [];
const seniors = [];

const employeeGroupWise = employees.forEach(emp => {

    if (emp.age <= 30) {
        youngEmp.push(emp);
    } else if (emp.age > 30 && emp.age < 50) {
        middleAge.push(emp)
    } else {
        seniors.push(emp);
    }

});

// part-3
// fetch employees with salary less than 1000 and age greater than 20.
// Then give them an increment 5 times their salary.


const empWithSalGreateThan1KandAgeGreaterThan20 = employees.filter(emp =>
    emp.salary < 1000 && emp.age > 20);

empWithSalGreateThan1KandAgeGreaterThan20.forEach(emp => {
    emp.salary = emp.salary * 5;
});

// console.log(empWithSalGreateThan1KandAgeGreaterThan20);


const btn1 = document.getElementById('ques1');
const btn2 = document.getElementById('ques2');
const btn3 = document.getElementById('ques3');

const results = document.getElementById('results');

btn1.onclick = function (e) {
    e.preventDefault();
    console.log(employeeWithSalGreaterThan5000);
    results.textContent = `Employees with salary greater than 5000 are : \n ${JSON.stringify(employeeWithSalGreaterThan5000, null, 2)}`;
}

btn2.onclick = function (e) {
    e.preventDefault();
    console.log(youngEmp, middleAge, seniors);
    results.textContent = `Young Employees : \n ${JSON.stringify(youngEmp, null, 2)} \n\n Middle Age Employees : \n ${JSON.stringify(middleAge, null, 2)} \n\n Senior Employees : \n ${JSON.stringify(seniors, null, 2)}`;
}


btn3.onclick = function (e) {
    e.preventDefault();
    console.log(empWithSalGreateThan1KandAgeGreaterThan20);
    results.textContent = `Employees with salary less than 1000 and age greater than 20 after incrementing their salary 5 times : \n ${JSON.stringify(empWithSalGreateThan1KandAgeGreaterThan20, null, 2)}`;
}