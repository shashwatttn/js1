
// Copy information of one object to another and log it to console.

const Person = {
    firstName : "Shashwat",
    lastName : "Singh",
    age : 23,
    role : "Software Developer Trainee @ ToTheNew",
    competency : "JS FullStack (PERN)",
    techStack : ["JS","React.js","Express.js","PostgreSQL","Node.js"]
}

const cloneObj = (obj)=> JSON.parse(JSON.stringify(obj));

const PersonClone = cloneObj(Person);


console.log(Person === PersonClone);
console.log(PersonClone);
