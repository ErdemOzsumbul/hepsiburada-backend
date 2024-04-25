const productSchema = require("../schema/product");

module.exports = async (req, res) => {
  const keyword = req.query.keyword;
  const search = req.query.search;
  const provinces = req.query.provinces;
  const tomorrow = req.query.tomorrow;
  console.log(provinces ? provinces.split(",") : [34, 35]);
  if (search) {
    const data = await productSchema.aggregate([
      {
        $match: {
          $and: [
            {
              provinces: {
                $elemMatch: {
                  $in: provinces
                    ? provinces.split(",").map(item => parseInt(item))
                    : [34, 35],
                },
              },
            },
            {
              tomorrow:
                tomorrow === "true"
                  ? {
                      $eq: true,
                    }
                  : {
                      $exists: true,
                    },
            },
          ],
          $or: [
            {
              name: {
                $regex: search,
                $options: "i",
              },
            },
            {
              keywords: {
                $elemMatch: {
                  $eq: search,
                },
              },
            },
          ],
        },
      },
    ]);

    res.send(data).status(200);
  } else if (keyword) {
    try {
      const data = await productSchema.aggregate([
        {
          $match: {
            keywords: {
              $elemMatch: {
                $eq: keyword,
              },
            },
          },
        },
      ]);
      res.send(data).status(200);
    } catch (error) {
      console.error(error.message);
      res.status(400).send("Bad Request");
    }
  } else {
    res.send("No products found").status(404);
  }
};
