const express = require("express");
const router = express.Router();

const deviceController = require("../Controllers/deviceController");
const dataController = require("../Controllers/dataController");

router.post("/create-device", deviceController.createDevice);
router.get("/devices", deviceController.getDevices);
router.get("/device", deviceController.getDeviceByID);
router.post("/save-data", dataController.saveData);
router.get("/get-data", dataController.getDeviceData);
router.post("/update-device", deviceController.updateDevice);
router.post("/send-email", deviceController.sendEmail);

module.exports = router;
