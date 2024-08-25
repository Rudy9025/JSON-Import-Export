import { Sequelize } from 'sequelize';
 
const sequelize = new Sequelize('csv', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
});

sequelize.sync();

const Entry = sequelize.define('Entry', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  value: {
    type: Sequelize.STRING,
    allowNull: false,
  },
} );

 
export default Entry;
