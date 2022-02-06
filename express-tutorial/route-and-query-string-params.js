// Setting up express API

const express = require("express");
const app = express();

const {products} = require("./data.js");


app.get("/", (req, res) => {
  res.send("<h1>Home Page </h1> <a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res)=> {
  const newProducts = products.map((product) => {
    const {id, name, image} = product;
    return {id, name, image};
  });
  res.json(newProducts);
});

// Setting up routes using route params/parameters
app.get("/api/products/:productID", (req, res)=> {
  // console.log(req);
  // console.log(req.params);

  // Destructuring request params
  const {productID} = req.params;

  const singleProduct = products.find((product)=> {
    return product.id === Number(productID);
  });

  // If the product does not exist return 404
  if(!singleProduct) {
    return res.status(404).send("Product does not exist.");
  }

  // If everything is OK return the data
  return res.json(singleProduct);
});

// query string params / URL params
app.get("/api/v1/query", (req, res)=> {
  // use req.query in order to access query access params

  // Creating new instanses of our product based on query string parameters
  let sortedProducts = [...products];

  // Destructuring the query string parameters sent by the user
  const {search, limit} = req.query;

  // Filter by search entery
  if(search) {
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search);
    });
  }

  // Filter by number of desired result
  if(limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if(sortedProducts.length < 1) {
    // request successful but there is no such data in the database
    // res.status(200).send("The product you search does not exist...");

    // Most common way to handle this issue
    return res.status(200).json({success: true, data: []});
  }

  return res.status(200).json(sortedProducts);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res)=> {
  console.log(req.params);
  res.send("LOL means Laughing Out Loud!");
});



app.listen(3000, ()=> {
  console.log("The server is up and running...");
});
