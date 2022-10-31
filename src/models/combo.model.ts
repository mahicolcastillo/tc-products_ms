import { DataTypes }    from 'sequelize';
import connectionMongo  from './connection';

const Model = (clientName: string) => {
    const ComboModel = connectionMongo(clientName).define('Product', {
        id_combo        : { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
        nombre          : { type: DataTypes.STRING, allowNull: false },
        cod_combo       : { type: DataTypes.STRING, allowNull: false },
        precio          : { type: DataTypes.DECIMAL, allowNull: false },
        eshappy         : { type: DataTypes.ENUM('S','N'), allowNull: false },
        estado          : { type: DataTypes.ENUM('a','i'), allowNull: false },
        imagen          : { type: DataTypes.STRING, allowNull: true },
        online          : { type: DataTypes.ENUM('S','N'), allowNull: false },
        descripcion     : { type: DataTypes.TEXT, allowNull: true },
        SKU             : { type: DataTypes.STRING, allowNull: true },
        enRappy         : { type: DataTypes.ENUM('s','n'), allowNull: false },
    }, {
        tableName: 'tm_combo',
        createdAt: false,
        updatedAt: false,
    });

    return ComboModel;
}

export default Model;