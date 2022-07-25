const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Peso: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    AñosDeVida: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.BLOB,
    }
  },{
    timestamps: false,
  });
};

