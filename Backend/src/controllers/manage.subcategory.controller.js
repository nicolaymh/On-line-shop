const createSubcategory = (req, res) => {
   console.log("From subcategory");

   console.log(req.body);

   res.json(req.body);
};

export { createSubcategory };
