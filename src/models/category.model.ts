import { DataTypes }    from 'sequelize';
import connectionMongo  from './connection';

const Model = (clientName: string) => {
    const CategoryModel = connectionMongo(clientName).define('Product', {
        id_catg        : { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
        descripcion    : { type: DataTypes.STRING, allowNull: false },
    }, {
        tableName: 'tm_producto_catg',
        createdAt: false,
        updatedAt: false,
    });

    return CategoryModel;
}

export default Model;