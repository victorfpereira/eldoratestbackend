const db = require("../models");

exports.getAllDevices = async (req, res) => {
  try {
    const devices = await db.Device.findAll({
      include: [
        {
          model: db.Category,
          as: 'category',
        },
      ],
    });
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDevice = async (req, res) => {
  try {
    const { color, partNumber, categoryId } = req.body;
    const device = await db.Device.create({ color, partNumber, categoryId });
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteDevice = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Device.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
