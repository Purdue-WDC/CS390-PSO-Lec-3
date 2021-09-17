console.log("Welcome to PSO");
let x = 1;
var y = 2;
const z = "Hi";
console.log(x, y, z);
const cast = [
  "Simu Liu",
  "Awkwafina",
  "Tony Chiu-Wai Leung",
  "Meng'er Zhang",
  "Ben Kingsley",
  "Fala Chen",
  "Michelle Yeoh",
];
const array = [1, 2, "Hi", [1, 3]];
console.log(array);
var string = "";
cast.forEach((ele) => (string += ele + " "));
console.log(string);
let newcast = cast.map((ele) => "Hello " + ele + "!");
console.log(newcast);
console.log(array);
console.log(cast);
