/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const TypeUser = require("./TypeUser");

module.exports = {

  attributes: {
    name: {
      type: 'string',
      allowNull: true
    },
    phone: {
      type: 'string',
      allowNull: true
    },
    email: {
      type: 'string',
      allowNull: true
    },
    password: {
      type: 'string',
      allowNull: true
    },
    gender: {
      type: 'string',
      allowNull: true
    },
    isActive: {
      type: 'boolean',
      allowNull: true
    },
    userTypeId: {
      type: 'number',
      allowNull: true
    },
    dateBirthDate: {
      type: 'string',
      allowNull: true
    },
  },

};

