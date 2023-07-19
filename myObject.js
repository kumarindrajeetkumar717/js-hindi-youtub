
const mysbol = Symbol("key1"); 

const jsUser = {
    name: "indrajeet",
    [mysbol]: "key1",
    age: 18,
    location: "Madhepura",
    isLoggeIn: false,
    email: "sonasingh@gmail.com",
    LastLoginDay: ["saturday","sunday"],
     "course": "full stack"
}

 console.log(jsUser["name"]);
 console.log(jsUser.name);
 console.log(jsUser.course)
 console.log( jsUser [mysbol]);


 jsUser.location = "Bhawanipur";
 console.log(jsUser["location"]);