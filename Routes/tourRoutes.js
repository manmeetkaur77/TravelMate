const tourController=require("../Controllers/tourController.js");
const express=require("express");
const router=express.Router();


router
    .route("/")
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route("/:id")
    .get(tourController.getTour)
    .patch(tourController.updateTour) // Ensure function exists
    .delete(tourController.deleteTour);

module.exports = router;


module.exports=router;