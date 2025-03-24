const Tours = require("../Models/toursmodel.js");

// Get all tours
exports.getAllTours = async (req, res) => {
    try {
        const tours = await Tours.find();
        res.status(200).json({
            status: "success",
            results: tours.length,
            data: { tours }
        });
    } catch (err) {
        console.error("Error fetching tours:", err.message);
        res.status(500).json({
            status: "fail",
            message: "Server error"
        });
    }
};

// Get a single tour by ID
exports.getTour = async (req, res) => {
    try {
        const tour = await Tours.findById(req.params.id);
        if (!tour) {
            return res.status(404).json({
                status: "fail",
                message: "Tour not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: { tour }
        });
    } catch (err) {
        console.error("Error fetching tour:", err.message);
        res.status(500).json({
            status: "fail",
            message: "Server error"
        });
    }
};

// Create a new tour
exports.createTour = async (req, res) => {
    try {
        const newTour = await Tours.create(req.body);
        res.status(201).json({
            status: "success",
            data: { tour: newTour }
        });
    } catch (err) {
        console.error("Error creating tour:", err.message);
        res.status(422).json({
            status: "fail",
            message: err.message || "Invalid data"
        });
    }
};

// Update a tour
exports.updateTour = async (req, res) => {
    try {
        const tour = await Tours.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!tour) {
            return res.status(404).json({
                status: "fail",
                message: "Tour not found"
            });
        }

        res.status(200).json({
            status: "success",
            data: { tour }
        });
    } catch (err) {
        console.error("Error updating tour:", err.message);
        res.status(422).json({
            status: "fail",
            message: err.message || "Invalid update request"
        });
    }
};

// Delete a tour
exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tours.findByIdAndDelete(req.params.id); // Correct method

        if (!tour) {
            return res.status(404).json({
                status: "fail",
                message: "Tour not found"
            });
        }

        res.status(204).json({
            status: "success",
            message: "Tour deleted successfully"
        });

    } catch (err) {
        console.error("Error deleting tour:", err.message);
        res.status(500).json({
            status: "fail",
            message: "Server error"
        });
    }
};
