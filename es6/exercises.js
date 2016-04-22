'use strict';
//const readline = require('readline');

// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });

function str(s) {
   if (s.length === 1 || s.length === 0) return true;
   let i=0,j=s.length-1;
   return (s[i] === s[j] && str(s.substring(1,s.length-1)));
}

function genString(l)
{
   let text = '';
   let possible = 'abcdefghijklmnopqrstuvwxyz';

   for( var i=0; i < l; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
   return text;
}

// (function f() {
//    rl.question('str? ', (s) => {

let s = genString(1000000);
let lastFound = { length: 0, start: 0};
for (let i=0;i<s.length;i++) {
   // odd case
   let mod = 1;
   let longest = '';
   while (str(s.substring(i-mod,i+mod))) {
      longest = s.substring(i-mod,i+mod);
      mod++;
   }

   if (longest.length > 2)
      console.log(longest);
   if (longest.length > lastFound.length) {
      lastFound.length = longest.length;
      lastFound.start = i-mod+1;
   }
   mod = 1;
   longest = '';
   while (str(s.substring(i-mod,i+mod+1))) {
      longest = s.substring(i-mod,i+mod+1);
      mod++;
   }
   if (longest.length > 2)
      console.log(longest);
   if (longest.length > lastFound.length) {
      lastFound.length = longest.length;
      lastFound.start = i-mod+1;
   }
}
console.log(
   s.substring(0,lastFound.start) + '____' + s.substring(lastFound.start, lastFound.start + lastFound.length) + '____'
   + s.substring(lastFound.end,s.length));
console.log('LONGEST: ' + s.substring(lastFound.start, lastFound.start + lastFound.length));
