const SequelizeMock =  require('sequelize-mock');

const sequelize = new SequelizeMock();

const ProductModelMock = sequelize.define('Product', {
    id: 1,
    texto: 'test'
});

export default ProductModelMock;