console.log("Hello World!");

//var - global (anywhere)
var firstName = "Myrtlle";
console.log("First Name:", firstName);

//let - (inside curly braces) local limited within curly braces (on that area only)
let lastName = "Cayanan";
lastName = "Sarmiento";
console.log("Last Name:", lastName);

if (true) {
  //var email = johndoe@gmail.com;
  let userName = "John Doe";

  //console.log("Email:", email);
  console.log("Username:", userName);
}

//const (cannot change its value)
const funds = 0;
//funds = 200; //ERROR
console.log("Funds:", funds);
