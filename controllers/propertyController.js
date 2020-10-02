const express = require("express");
const router = express.Router();

const properties = require("../models/properties");

//Index
router.get("/",(req,res)=>{
    console.log(properties);
    res.render("properties/indexProperty",{
        properties: properties,
    });
});

//Show
router.get("/:propertyIndex",(req,res)=>{
    const propertyIndex = req.params.propertyIndex;
    const property = properties[propertyIndex];

    res.render("properties/showProperty",{
        property: property,
        propertyIndex: propertyIndex
    });
});

//Edit
router.get("/:propertyIndex/edit",(req,res)=>{
    const propertyIndex = req.params.propertyIndex;
    const property = properties[propertyIndex];

    res.render("properties/editProperty",{
        property: property,
        propertyIndex: propertyIndex
    });
});

//Destroy
router.delete("/:propertyIndex",(req,res)=>{
    const propertyIndex = req.params.propertyIndex;
    properties.splice(propertyIndex,1);
    res.redirect(`/properties/${propertyIndex}`);
});

//Update
router.put("/:propertyIndex",(req,res) => {
    const propertyIndex = req.params.propertyIndex;
    const newFruit = {
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        lot: req.body.lot,
        img: req.body.img,
    }
    properties[propertyIndex] = newFruit;
    // properties.splice(propertyIndex,1,newFruit);
    res.redirect(`/properties/${propertyIndex}`);

});
module.exports = router;