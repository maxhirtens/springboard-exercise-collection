// function countdown(num) {
//   while(num > 0) {
//     num--;
//     setInterval(console.log(num), 1000);
//   }
//   console.log("DONE!");
// }
function countDown(num){
  let interval = setInterval(function(){
    num--;
    if(num <= 0){
      clearInterval(interval);
      console.log('DONE!');
    } else {
    console.log(num);
    }
}, 1000);
}

function randomGame() {
  let count = 0;
  let interval = setInterval(function(){
    let num = Math.random();
    count++;
    if(num>0.75){
      clearInterval(interval);
      console.log(`It took ${count} tries!`);
    }
  }, 1000)
}
