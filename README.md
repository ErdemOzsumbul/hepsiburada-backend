# Database Model

- **[check schema (./src/schema/product.js)](./src/schema/product.js)**

> ./src/schema/product.js
```ruby

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
       name: {type: String},
       model: {type: String},
       price: {type: Number},
       provinces: {type: Array},
       src: { type: String},
       starRating: {type: Number},
       ratingCount: {type: String},
       sellerPoints: {type: Number},
       keywords: {type: Array},
       tomorrow: {type: Boolean},
});

module.exports = mongoose.model("products", userSchema);
````

## Code Explanation
### Imports
* **mongoose:** Imports the Mongoose library, which is used for MongoDB interactions.
* **Schema:** Imports the Schema class from Mongoose. It is used to define data models.
### Schema Definition
* **userSchema:** Creates a new schema from the Schema class. This schema defines the structure of the "product" collection.
* **name:** The product's name. Data type: String.
* **model:** The product's model. Data type: String.
* **price:** The product's price. Data type: Number.
* **provinces:** The provinces where the product is available. Data type: Array.
* **src:** The source URL of the product image. Data type: String.
* **starRating:** The star rating of the product. Data type: Number.
* **ratingCount:** The number of ratings for the product. Data type: String.
* **sellerPoints:** The seller's points. Data type: Number.
* **keywords:** The keywords associated with the product. Data type: Array.
* **tomorrow:** Indicates whether the product can be delivered the next day. Data type: Boolean.
### Model Creation
* **mongoose.model("product", userSchema):** Creates the "product" model using Mongoose's model function. This model represents the "product" collection and is structured according to the userSchema.
### Module Export
* **module.exports** = mongoose.model("product", userSchema): Exports the "product" model so it can be used in other files.
This provides an overview of the code's content and function.
