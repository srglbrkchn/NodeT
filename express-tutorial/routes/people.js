const express = require("express");

// Getting the Router from the express
// The router instanse that takes care of routing
// We do the routing here, instead of the app
const router = express.Router();

let {people} = require("../data");


router.get("/", (req, res) => {
  res.status(200).json({success:true, data:people});
});

router.post("/", (req, res) => {
  const {name} = req.body;

  if(!name) {
    return(res.status(400).json({success:false, msg: "Please provide name value."}));
  }else {
    return(res.status(201).json({success:true, person:name}));
  }
});

router.post("/postman", (req, res) => {
  const {name} = req.body;

  if(!name) {
    return(res.status(400).json({success:false, msg: "Please provide a name."}));
  }else{
    return(res.status(201).json({success:true, data: [...people, name]}));
  }
});

// put method for update
router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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


module.exports = router;
