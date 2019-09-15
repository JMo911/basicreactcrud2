import Sequelize from 'sequelize';
const sequelizeConnection = require('../config/sequelizeconfig');

const User = sequelizeConnection.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
    // car: {
    //     licensePlate: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    //     make: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    //     model: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     },
    //     color: {
    //         type: Sequelize.STRING,
    //         allowNull: false,
    //     }
    //   },
  });

export default User;