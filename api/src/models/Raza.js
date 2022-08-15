const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Altura: {
      type: DataTypes.ARRAY( DataTypes.STRING ),
      allowNull: false
    },
    Peso: {
      type: DataTypes.ARRAY( DataTypes.STRING ),
      allowNull: false
    },
    A_vida: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.BLOB,
    }
  },{
    timestamps: false,
  });
};

