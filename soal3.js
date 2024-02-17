const prompt = require('prompt-sync')()

const segitiga = prompt("Banyak Segitiga : ")

var valid = typeof(segitiga)

if(valid == "string"){
  console.log("Data harus number")
} else{
  for(let i=segitiga; i >= 1; i--){
    let angka = ""
    for(let j=1; j <= i; j++){
      angka += j + ' '
    }
    console.log(angka)
  }
}