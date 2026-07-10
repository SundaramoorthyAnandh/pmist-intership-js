let promise = new Promise((resolve,reject) => {
  const success = true;
if(success)
  resolve("promise  succeed");
   else
     reject("promise rejected");
})

promise
.then(result => {
  console.log(result)
})
.catch(reject => {
      console.log(reject)
      })
.finally(()=>{
  console.log("finally promise is executed")
})
