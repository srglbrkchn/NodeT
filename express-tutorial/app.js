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

app.get("/api/products/:productID/reviews/:reviewID", (req, res)=> {
  console.log(req.params);
  res.send("LOL means Laughing Out Loud!");
});



app.listen(3000, ()=> {
  console.log("The server is up and running...");
});
