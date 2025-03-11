const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/device.controller');

/**
 * @swagger
 * tags:
 *   name: Devices
 *   description: Gerenciamento de dispositivos
 */

/**
 * @swagger
 * /devices:
 *   get:
 *     summary: Retorna a lista de dispositivos
 *     tags: [Devices]
 *     responses:
 *       200:
 *         description: Lista de dispositivos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Device'
 */
router.get('/', deviceController.getAllDevices);

/**
 * @swagger
 * /devices:
 *   post:
 *     summary: Cria um novo dispositivo
 *     tags: [Devices]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DeviceInput'
 *     responses:
 *       201:
 *         description: Dispositivo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Device'
 *       400:
 *         description: Erro na requisição
 */
router.post('/', deviceController.createDevice);

/**
 * @swagger
 * /devices/{id}:
 *   delete:
 *     summary: Exclui um dispositivo pelo ID
 *     tags: [Devices]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do dispositivo
 *     responses:
 *       204:
 *         description: Dispositivo excluído com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;