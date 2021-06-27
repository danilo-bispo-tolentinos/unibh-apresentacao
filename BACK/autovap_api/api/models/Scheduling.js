/**
 * Scheduling.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    schedulingDate: {
      type: 'string',
      allowNull: true
    },
    idUser: {
      model: 'User'
    },
    idVehicle: {
      model: 'VehiclesUsers'
    },
    idServicesClean: {
      model: 'ServicesClean'
    },
    typePayment: {
      model: 'TypePayment'
    },
    status: {
      model: 'Status'
    },
    idEmployee: {
      model: 'User'
    },
    description: {
      type: 'string',
      allowNull: true
    },

  },

};

