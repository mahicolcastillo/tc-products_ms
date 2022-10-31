import { Sequelize } from 'sequelize';
import config                   from '../config/global';

const connectionMongo = (clientName: string): Sequelize => {
    const sequelize = new Sequelize(config.database.prefix+clientName, config.database.user, config.database.pass, {
        host: config.database.host,
        dialect: 'mysql',
        logging: false
    });

    return sequelize;
}

export default connectionMongo;