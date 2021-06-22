/**
 * VehiclesUsers.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      allowNull: true
    },
    typeVehicle: {
      type: 'number',
      allowNull: true
    },
    brand: {
      type: 'string',
      allowNull: true
    },
    model: {
      type: 'string',
      allowNull: true
    },
    placa: {
      type: 'string',
      allowNull: true
    },
    color: {
      type: 'string',
      allowNull: true
    },
    isActive: {
      type: 'boolean',
      allowNull: true
    },
    idUser: {
      type: 'number',
      allowNull: true
    },
  },

};

