const express = require('express');
const cors = require('cors');
const db = require('./src/models');
const deviceRoutes = require('./src/routes/device.routes');
const categoryRoutes = require('./src/routes/category.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/v1/devices', deviceRoutes);
app.use('/api/v1/categories', categoryRoutes);

// Sincronizar banco de dados
(async () => {
  try {
    await db.sequelize.sync();
    console.log('Banco de dados sincronizado.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco:', error);
  }
})();

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});