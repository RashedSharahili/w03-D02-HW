type userAdmin = User | Admin

interface User {
    [key:string]: any
    age: number;
    name: string;
    occupation: string
}

interface Admin {
    [key:string]: any
    age: number;
    name: string;
    specialty: string;
}

let persons: userAdmin[] = [
    {
        age: 16,
        name: "Yahya",
        occupation: "Student"
    },
    {
        age: 26,
        name: "Mohammed",
        occupation: "Employee"
    },
    {
        age: 22,
        name: "Ahmed",
        occupation: "Graduate"
    },
    {
        age: 33,
        name: "Fahad",
        specialty: "IT"
    },
    {
        age: 32,
        name: "Masha",
        specialty: "CS"
    },
    {
        age: 30,
        name: "Haitham",
        specialty: "Web Developer"
    }
];

function print_persons(persons: userAdmin[]) {

    console.log(persons);
    
}

print_persons(persons);

function print_user_admin(persons: userAdmin[]) {

        // console.log("User: "+ persons);

        for(let person = 0; person < persons.length; person++) {

            if(persons[person].occupation !== undefined) {

                console.log("User: "+ persons[person].name);
                
            } else {

                console.log("Admin: "+ persons[person].name);
            }
            
        }
}

print_user_admin(persons);

function change_age(persons: userAdmin, age: number) {

    persons.age = age;

    return persons

}

console.log(change_age(persons[2], 33));
