const fs = require('fs');
const { json } = require('stream/consumers');
const path = "/Users/manmeetkaur/Desktop/Big Folder/TravelMate/dev-data/data/tours-simple.json";

const tours = JSON.parse(fs.readFileSync(path, 'utf-8'));

// Middleware to check if tour ID is valid
exports.checkID = (req, res, next,val) => {
    console.log(`${val}`)
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        });
    }
    next();
};
exports.postmiddleware=(req,res,next)=>{
    const body=(req.body);
    if(!req.body.name || !req.body.price){
        res.status(402).json({
            message:"YOU ARE NOT ALLOWED TO SEND"
        })
    }
    next();
}

// Get all tours
exports.getTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: { tours }
    });
};

// Get a single tour by ID
exports.getTour= (req, res) => {
    const id=req.params.id*1;
    const tour = tours.find(el => el.id === id);
    res.status(200).json({
        status: "success",
        data: { tour }
    });
};

// Create a new tour
exports.postTour = (req, res) => {
    console.log("for post")
    console.log(req.body);
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
  
    tours.push(newTour);
  
    fs.writeFile(
      path,
      JSON.stringify(tours),
      err => {
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour
          }
        });
      }
    );
  };

// Update a tour
exports.patchTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if (!tour) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        });
    }

    Object.assign(tour, req.body);
    fs.writeFileSync(path, JSON.stringify(tours, null, 2), "utf-8");

    res.status(200).json({
        status: "success",
        data: { tour }
    });
};

// Delete a tour
exports.deleteTour = (req, res) => {
    const id = req.params.id * 1;
    const index = tours.findIndex(el => el.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Tour not found"
        });
    }

    tours.splice(index, 1);
    fs.writeFileSync(path, JSON.stringify(tours, null, 2), "utf-8");

    res.status(204).json({
        status: "success",
        data: null
    });
};

