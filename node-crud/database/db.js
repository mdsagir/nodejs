const Sequalize=require('sequelize')
const db={}

const sequelize=new Sequalize({
  dialect: "mysql",
            host:  process.env.DB_HOST,
            port:  3306,
            username: 'root',
            password:  'password',
            database:  "test",
            logging: false,
            define: {
              timestamps: false
          }
})

db.sequelize=sequelize
db.Sequalize=Sequalize

module.exports=db;
