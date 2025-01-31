const tourController=require("../Controllers/tourController.js");
const express=require("express");
const router=express.Router();
router.param('id',tourController.checkID);
router
    .route('/')
    .get(tourController.getTours)
    .post(tourController.postmiddleware,tourController.postTour)

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.patchTour)
    .delete(tourController.deleteTour)


module.exports=router;