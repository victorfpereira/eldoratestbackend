const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

router.get('/', deviceController.getAllDevices);
router.post('/', deviceController.createDevice);
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;