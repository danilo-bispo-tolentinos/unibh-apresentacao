/**
 * ServicesClean.js
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
    description: {
      type: 'string',
      allowNull: true
    },
    price: {
      type: 'number',
      allowNull: true
    },
    isActive: {
      type: 'boolean',
      allowNull: true
    },
  },

};

