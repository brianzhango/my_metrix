const router = require("express").Router();
let Job = require("../models/job.model");
let Project = require("../models/project.model");
let Shipment = require("../models/shipment.model");
const {projectDisplay, shipmentDisplay, shipmentDetail} = require("../front-end/controllers/jobController")
const {protect} = require("../front-end/src/middleware/authMiddleware")

router.get("/", protect, projectDisplay)

router.get("/:job_number", protect, shipmentDisplay)

router.get("/:job_number/:ship_id", protect, shipmentDetail)

module.exports = router;
