const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Raza', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: 'productIdUnique',
      get(){
        return `${this.getDataValue('id')}-db`
      }
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
      type: DataTypes.STRING,
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

