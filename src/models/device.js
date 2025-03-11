module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        is: /^[a-zA-Z]+$/, // Somente letras
      },
    },
    partNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1,
      },
    },
    categoryId: { // 🔹 Certifique-se de adicionar este campo explicitamente
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Categories', // Nome da tabela no banco
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  });

  Device.associate = (models) => {
    Device.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
  };

  return Device;
};
