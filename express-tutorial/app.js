// Setting up express API

const express = require("express");
const app = express();

let {people} = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data; attatch it to req.body
app.use(express.urlencoded({extended:false}));

// parse json; attach data sent by js to req.body for use
// straight up http request, sent by js
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({success:true, data:people});
});

app.post("/api/people", (req, res) => {
  const {name} = req.body;

  if(!name) {
    return(res.status(400).json({success:false, msg: "Please provide name value."}));
  }else {
    return(res.status(201).json({success:true, person:name}));
  }
});

app.post("/api/postman/people", (req, res) => {
  const {name} = req.body;

  if(!name) {
    return(res.status(400).json({success:false, msg: "Please provide a name."}));
  }else{
    return(res.status(201).json({success:true, data: [...people, name]}));
  }
});

// put method for update
app.put("/api/people/:id", (req, res) => {
  const {id} = req.params;
  const {name} = req.body;
  const person = people.find((person)=> {
    if(person.id === Number(id)){
      return person;
    }
  });

  if(!person) {
    res.status(404)
    .json({success:false, msg:`No person with ID: ${id} exists.`});
  }
    const newPeople = people.map((person)=> {
      if(person.id === Number(id)) {
        person.name = name;
        return person;
      }else {
        return person;
      }
    });
  res.status(200).json({success:true, data: newPeople});
});

app.delete("/api/people/:id", (req, res) => {
  const {id} = req.params;
  const person = people.find((person)=> {
    if(person.id === Number(id)){
      return person;
    }
  });

  if(!person) {
    res.status(404).json({success:false, msg: `Person with ID ${id} does not exists`});
  }

  const newPeople = people.filter((person)=> {
      return person.id !== Number(id);
  });
  res.status(200).json({success:true, data:newPeople});
});


app.post("/login", (req, res) => {
  const {name} = req.body;
  if(name) {
    res.status(200).send(`Welcome ${name}.`);
  }else{
    res.status(401).send("Please provide credentials.");
  }

});


app.listen(3000, () => {
  console.log("The server is up and running...");
});
