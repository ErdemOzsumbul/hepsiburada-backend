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
       src: {type: String},
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
### Reasons for Using this Database Model: 
* **Mongoose and MongoDB Integration:** The code uses Mongoose to simplify access to MongoDB, making working with MongoDB straightforward and efficient.
* **Specific Fields and Relationships:** The product collection's fields (e.g., name, model, price) and relationships (e.g., keywords, provinces) are defined.
* **Data Manipulation:** The model allows you to perform create, read, update, and delete (CRUD) operations more easily and clearly.
* **In order to include a product in more than one category, I categorized it with the help of keywords.**
* **I did not create a collection because I could find products with the help of keywords.**
### REST API Explanation:
#### `GET /api/products?keyword="necklace"`

```ruby
axios.get("/api/products", {params: { keyword: "necklace" }});
```

`Response /api/products?keyword="necklace"`

```ruby
[
    {
        "_id": "662abf3487c9289c326c937e",
        "name": "The Collection Figaro İnce Model Kolyer",
        "model": "Figaro",
        "price": 99,
        "provinces": [34],
        "src": "images/necklace/nec2.jpeg",
        "starRating": 2,
        "ratingCount": "90",
        "sellerPoints": 3.4,
        "keywords": [
            "kolye",
            "necklace"
        ],
        "tomorrow": false,
    },
]
```

#### `GET /api/products?search="kuruyemiş&tomorrow=false&provinces=34,35"`

```ruby
axios.get("/api/products",
       {
              params:{
                     search: "necklace",
                     tomorrow:false,
                     provinces=34,35
              }
       }
);
```

`Response /api/products?search="kuruyemiş&tomorrow=false&provinces=34,35"`

```ruby
[
    {
        "_id": "662abf3487c9289c326c939c",
        "name": "Paşa Kuruyemiş Kaju Fıstığı 40 gr x 12 Adet",
        "model": "Paşa Kuruyemiş",
        "price": 393,
        "provinces": [
            34,
            35
        ],
        "src": "images/snack/snack1.jpg",
        "starRating": 4,
        "ratingCount": "20",
        "sellerPoints": 6.8,
        "keywords": [
            "kuruyemis",
            "snack"
        ],
        "tomorrow": false,
    },
]
```

#### `POST /api/multiple/addProduct"`

```ruby
axios.post("/api/multiple/addProduct",
       {
              body:{
                     products:[
                      {
                             "name": "Paşa Kuruyemiş Kaju Fıstığı 40 gr x 12 Adet",
                             "model": "Paşa Kuruyemiş",
                             "price": 393,
                             "provinces": [
                                 34,
                                 35
                             ],
                             "src": "images/snack/snack1.jpg",
                             "starRating": 4,
                             "ratingCount": "20",
                             "sellerPoints": 6.8,
                             "keywords": [
                                 "kuruyemis",
                                 "snack"
                             ],
                             "tomorrow": false,
                         }
                     ]
              }
       }
);
```

`Response /api/multiple/addProduct"`

```ruby
Products added
```



#### `POST /api/product/details"`


```ruby
axios.get("/api/product/details",
       {
              params:{
                     id:662abf3487c9289c326c9389
              }
       }
);
```

 `Response /api/product/details"`

```ruby
{
    "_id": "662abf3487c9289c326c9389",
    "name": "Adidas Breaknet Court Erkek Spor Ayakkabi",
    "model": "Adidas",
    "price": 949,
    "provinces": [
        35
    ],
    "src": "images/superPrice/adidasBreak.jpeg",
    "starRating": 3,
    "ratingCount": "23",
    "sellerPoints": 4.2,
    "keywords": [
        "superPrice"
    ],
    "tomorrow": false,
}
```
