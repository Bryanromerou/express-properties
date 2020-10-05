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

//New
router.get("/new",(req,res)=>{
    res.render("properties/newProperty");
});

//create
router.post("/", (req,res)=>{
    const newProperty = {
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        lot: req.body.lot,
        img: req.body.img,
    }
    properties.push(newProperty);
    res.redirect(`/properties/${properties.length-1}`);
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

//Update
router.put("/:propertyIndex",(req,res) => {
    const propertyIndex = req.params.propertyIndex;
    const newProperty = {
        address: req.body.address,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        lot: req.body.lot,
        img: req.body.img,
    }
    properties[propertyIndex] = newProperty;
    // properties.splice(propertyIndex,1,newProperty);
    res.redirect(`/properties/${propertyIndex}`);
    
});

//Destroy
router.delete("/:propertyIndex",(req,res)=>{
    const propertyIndex = req.params.propertyIndex;
    properties.splice(propertyIndex,1);
    res.redirect(`/properties/${propertyIndex}`);
});
module.exports = router;