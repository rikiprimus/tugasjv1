let data = 
{
  id: 1,
  name:"Leanne Graham",
  username:"Bret",
  email:"Sincere@april.biz",
  address:
  {
    street:"Kulas Light",
    suite:"Apt. 556",
    city:"Gwenborough",
    zipcode:"92998-3874",
  },
  phone:"1-770-736-8031 x56442",
  website:"hildegard.org",
}

let me = {
  name: "Ricky Primus Saputra",
  email: "rikiprimus33@gmail.com",
  hobby: "Pemrograman"
}

let updateData = {...data, ...me}
let {address:{street, city}} = updateData

console.log(updateData)
console.log("Street : "+street)
console.log("City : "+city)

