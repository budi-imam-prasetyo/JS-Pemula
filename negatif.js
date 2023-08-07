// var a = 100;
// var b;
// if(a % 2 == 1){
//      for(b = 1; b < a; b++){
//           console.log(b);
//           b++
//      }
// }else if(a % 2 == 0){
//      for(b = 1; b < a; b++){
//           console.log(b+" Genap");
//           b++
//      }
// }
// if(a < 0){
//      console.log("error");
// }


var a = 100;
var b;
if (a > 0) {
  for (b = 1; b <= a; b++) {
    if (b % 2 == 1) {
      console.log(b);
    } else if (b % 2 == 0) {
      console.log("genap");
    }
  }
} else {
  console.log("angka negatif");
}
