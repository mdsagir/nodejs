const express = require('express')
var router=express.Router()
var audit =require('../model/audit');
const { check, validationResult } = require('express-validator');

router.get('/audit',async (req,res)=>{
  
 await audit.findAll()
    .then(a=>{
      res.json(a)
  }).catch(err=>{
    res.send('error'+err)
    res.status(400)
  })
});

router.get('/audit/:id',async (req,res)=>{
  var id= req.params.id;
  await audit.findAll({
    where :{
      id:id
    }
  })
  .then(a=>{
      res.json(a)
  }).catch(err=>{
    res.send('error'+err)
    res.status(400);
  })
});

router.post('/audit', async (req,res)=> {
  
  await check('updatedBy').not().isEmpty().run(req)
  await check('actions').not()
    .isEmpty().withMessage('Action field is require.').bail()
    .isLength({ min: 3 }).withMessage('Action field is require miminum 3 character.').bail()
    .isLength({ max: 10 }).withMessage('Action field is require maximum 10 character.').run(req)
  await check('entityId')
    .isNumeric().withMessage('Entity id only number').run(req)
    
  // await check('entityType').custom(e => {
  //   console.log('Hello I am here!'+e)
  //   const target='dbEntity'
  //   if (!e === target) {
  //     console.log(e===myEntityType)
  //     return Promise.reject('EntityType already registered')
  //   }
  // }).run(req)
  const err = validationResult(req)
  if (!err.isEmpty()) {
    return res.status(400).json(err.errors[0])
  }

  const _audit=req.body;
  try {
    const __audit= await audit.create(_audit)
    res.status(201).json(__audit)
  } catch (err) {
    res.status(400).send(err)
  }
});

module.exports = router;
