// Change obj key value without affecting the original obj
let obj1 = {
  name: "deva",
  age: 26,
  address: {
    state: "Tamil Nadu",
    city: "Trichy",
  },
};
console.log(obj1);

//ANSWER
let obj2 = {
  ...obj1,
  address: {
    ...obj1.address,
    state: "Karnataka",
    city: "Banglore",
  },
};
console.log(obj2);

console.log("---------------------------------------------------");
console.log("D E S T R U C T U R I N G");
//Object destructuring referance :- https://www.youtube.com/watch?v=BQs0gTgFz04&t=8s
let person = {
  name: "deva",
  age: 26,
  hobbies: ["football", "youtube", "online-games"],
  id: null,
};
const { name, age: vayasu, gender = "male", id = 7 } = person; //give male as default value , useful in API calling
console.log(name);
console.log(vayasu); // renamed the prop age as vayasu, now age will be undefined
console.log(gender);
console.log(id); // id will 7, it will change only for undefined values

const {
  hobbies: { length },
} = person;
console.log(length);

// we can use obj destructuring in for loops

const cars = [
  {
    year: 2010,
    make: "Benz",
  },
  {
    year: 2000,
    make: "Toyota",
  },
  {
    year: 2016,
    make: "Hundai",
  },
];

for (const c of cars) {
  console.log(c.make);
}
//destructuring in for loops
for (const { make } of cars) {
  console.log(make);
}

//destructure in function
const details = {
  age: 78,
  name: "deva",
};

function getDetails({ name, country = "India" }) {
  // destructure the params , giving default value for country
  console.log(`thy name is ${name} and hes from ${country}`);
}
getDetails(details);

//destructuring in return statement
const p = {
  age: 26,
  name: "Devaviswa",
};
function doubleP(o) {
  return {
    age: o.age * 2,
    name: o.name.repeat(2),
  };
}
const double = doubleP(p);
console.log(double);

// destructured and renamed:-
const { name: doubledName, age: doubledAge } = doubleP(p);
console.log(doubledAge, doubledName);
