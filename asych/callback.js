var fs=require('fs')
// 1
// This is not work because calling the function Asynchronous
// data is undefine
// console.log('Starting the Programme')
// var data= fs.readFile('input.txt') 
// console.log(data.toString())
// console.log('Ended!!')

//2 Its work because Synchronous
// console.log('Starting the Programme')
// var data= fs.readFileSync('input.txt') 
// console.log(data.toString())
// console.log('Ended!!')

//3 Lets do it by call back
// console.log('Starting the Programme')
// fs.readFile('input.txt', function(err,data){
//     if(err)
//         return console.log('Error: '+err)
//     console.log(data.toString())
// }) 
// console.log('Ended!!')

//4 lets do by Promise

// console.log("staring");
// new Promise((resolve,reject)=>{
    
//     fs.readFile('input.txt',(err,data)=>{
//         if(err){
//             reject(err)
//         }else{
//             resolve(data)
//         }
//     }); 
// })
// .then(data=>{
//     console.log("1st: "+data.toString())
// })
// .catch(err=>{
//     console.log(err.toString())
// })
// console.log("Ending");




