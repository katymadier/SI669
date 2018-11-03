let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("weather is good")
  }, 2000)
});
prom.then((msg) => {
  console.log(msg + "resolved");
});

function greet(prom){
  prom.then((msg)=>{
    console.log("hi!" +msg)
  })
}
greet(prom);
