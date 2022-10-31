import { Sequelize, DataTypes } from 'sequelize';
import config                   from '../config/global';

const Model = (clientName: string) => {
    const sequelize = new Sequelize(config.database.prefix+clientName, config.database.user, config.database.pass, {
        host: config.database.host,
        dialect: 'mysql',
        logging: false
    });
    
    const ProductModel = sequelize.define('Product', {
        id_prod         : { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
        id_catg         : { type: DataTypes.NUMBER, allowNull: false },
        id_areap        : { type: DataTypes.NUMBER, allowNull: false },
        nombre          : { type: DataTypes.STRING, allowNull: false },
        cod_prod        : { type: DataTypes.STRING, allowNull: true },
        precio          : { type: DataTypes.DECIMAL, allowNull: false },
        precio_costo    : { type: DataTypes.DECIMAL, allowNull: false },
        receta          : { type: DataTypes.NUMBER, allowNull: false },
        stock_min       : { type: DataTypes.NUMBER, allowNull: false },
        estado          : { type: DataTypes.STRING, allowNull: false },
        control_stock   : { type: DataTypes.ENUM('S','N'), allowNull: false },
        solo_cm         : { type: DataTypes.ENUM('S','N'), allowNull: true },
        imagen          : { type: DataTypes.STRING, allowNull: true },
        online          : { type: DataTypes.ENUM('S','N'), allowNull: false },
        descripcion     : { type: DataTypes.TEXT, allowNull: true },
        SKU             : { type: DataTypes.STRING, allowNull: true },
        enRappy         : { type: DataTypes.ENUM('s','n'), allowNull: false },
    }, {
        tableName: 'tm_producto',
        createdAt: false,
        updatedAt: false,
    });

    return ProductModel;
}

export default Model;