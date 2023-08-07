var a = 93;
var b = 95;
var c = 90;

if(a > b && a > c){
     console.log("nilai max adalah a");
}else if(b > a && b > c){
     console.log("nilai max adalah b");
}else if(c > a && c > b){
     console.log("nilai max adalah c");
}

// if(a == 90 || b == 90 || c == 90){
//      console.log("nilai istimewa");
// }

if(a == 90){
     console.log("nilai a adalah nilai istimewa");
}else if(b == 90){
     console.log("nilai b adalah nilai istimewa");
}else if(c == 90){
     console.log("nilai c adalah nilai istimewa");
}else{
     console.log("Tidak ada nilai istimewa");
}