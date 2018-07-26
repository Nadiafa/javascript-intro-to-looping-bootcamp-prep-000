function forLoop(array) {
  for (var i=0; i<25; i++) {
    if (i===1){
      array.push(`I am ${i} strange loop.`);
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
  return array;
}


// function whileLoop(n) {
//   while (var i=n.length-1; i=0; i--) {
//     console.log(i);
//   }
// }