const prompt = require('prompt-sync')()

var bahasa = prompt("Masukan nilai Bahasa Indonesia : ")
var english = prompt("Masukan nilai Bahasa Inggris : ")
var matematika = prompt("Masukan nilai Matematika : ")
var ipa = prompt("Masukan nilai Bahasa IPA : ")

var total = 0
var grade = ""

var arr = [bahasa, english, matematika, ipa]
for(let i = 0; i < arr.length ; i++){
  if(arr[i] == ""){
    console.log("==============================")
    console.log("Nilai harus diisi semua gan !!")
    console.log("==============================")
    return false
  } else {
    total += parseFloat(arr[i])
    var hasil = total / 4
  }
}

if(hasil >= 90){
  grade += "A"
} else if(hasil >= 80){
  grade += "B"
} else if(hasil >= 70){
  grade += "C"
} else if(hasil >= 60){
  grade += "D"
} else {
  grade += "E"
}

console.log("===============")
console.log("Rata-rata : "+hasil)
console.log("Grade : "+grade)
