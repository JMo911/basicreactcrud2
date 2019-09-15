const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelizeConnection = new Sequelize('basicreactcrud2', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889
});

export default sequelizeConnection;