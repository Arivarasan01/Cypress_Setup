let str = " I am a guy who works works at software industry";
let set = new Set();
let words = str.split(" ")
words.forEach(ele => {
     set.add(ele)
})
console.log(set); 