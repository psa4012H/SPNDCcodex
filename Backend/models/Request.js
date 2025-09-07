const { DataTypes } = require('sequelize');
const sequelize = require('../../../database');

const Request = sequelize.define('Request', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  patientId: { type: DataTypes.INTEGER, allowNull: false },
  donorId: { type: DataTypes.INTEGER, allowNull: true },
  bloodGroup: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'accepted', 'rejected'), defaultValue: 'pending' }
});

module.exports = Request;