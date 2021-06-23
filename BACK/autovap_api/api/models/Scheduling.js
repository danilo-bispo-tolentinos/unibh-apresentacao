/**
 * Scheduling.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idUser: {
      type: 'number',
      allowNull: true
    },
    idVehicle: {
      type: 'number',
      allowNull: true
    },
    idServiceClean: {
      type: 'number',
      allowNull: true
    },
    idEmployee: {
      type: 'number',
      allowNull: true
    },
    idPayment: {
      type: 'number',
      allowNull: true
    },
    dateScheduling: {
      type: 'string',
      allowNull: true
    },
    description: {
      type: 'number',
      allowNull: true
    },
    status: {
      type: 'number',
      allowNull: true
    },
    
  },

};

