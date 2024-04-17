import Knex from 'knex';
import config from '../knexfile';
const connection = Knex(config);

export default connection;
