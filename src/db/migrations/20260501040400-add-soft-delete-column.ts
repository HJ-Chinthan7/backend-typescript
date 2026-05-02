'use strict';
import { DataTypes, QueryInterface } from "sequelize";
export default {
  async up (queryInterface:QueryInterface) {
   await queryInterface.addColumn('hotels','deletedAt',{
    type:DataTypes.DATE,
    allowNull:true,
    defaultValue:null
   });
  },

  async down (queryInterface:QueryInterface) {
   await queryInterface.removeColumn('hotels','deletedAt');
  }
};
