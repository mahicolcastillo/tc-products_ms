import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('tucomand_demo', 'root', 'plokio', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

const ProductModel = sequelize.define('Product', {
    id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    texto: DataTypes.STRING,
}, {
    tableName: 'testing',
    createdAt: false,
    updatedAt: false,
});

export default ProductModel;