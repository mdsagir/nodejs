const Sequelize=require('sequelize')
const db= require('../database/db')


module.exports =  db.sequelize.define(
    'audit',
    {
        id: {
        type: Sequelize.INTEGER(11),
        autoIncrement:true,
        primaryKey: true
        },
        updatedBy: {
        type:Sequelize.STRING(45),
        field: 'updated_by'
        },
        actions: {
        type:Sequelize.STRING(45),
        field:'actions'
        },
        oldData: {
        type:Sequelize.STRING(45),
        field:'old_data'
        },
        newData: {
        type:Sequelize.STRING(45),
        field:'new_data'
        },
        entityType: {
        type:Sequelize.STRING(45),
        field:'entity_type'
        },
        entityId: {
        type:Sequelize.STRING(45),
        field:'entity_id'
        },
        updatedDate: {
        type:Sequelize.DATE,
        field:'updated_date',
        defaultValue: Sequelize.NOW
        }
    },
   {
    freezeTableName: true
   }
)