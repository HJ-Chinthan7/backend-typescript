'use strict';
import { QueryInterface } from "sequelize";
export default {
  async up (queryInterface:QueryInterface) {
   await queryInterface.sequelize.query(`ALTER TABLE hotels ADD COLUMN rating FLOAT DEFAULT NULL,ADD COLUMN rating_count INTEGER DEFAULT NULL;`);
  },

  async down (queryInterface:QueryInterface) {
   await queryInterface.sequelize.query(`ALTER TABLE hotels DROP COLUMN rating, DROP COLUMN rating_count;`);
  }
};
