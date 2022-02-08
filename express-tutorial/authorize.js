const authorize = (req, res, next) => {
  const {user} = req.query;

  if(user === "john") {
    // Adding the property of the user to the req object
    req.user = {name: "john", id: "7"};
    
    next();
  }else {
    res.status(401).send("Unauthorized.");
  }

}

module.exports = authorize;
