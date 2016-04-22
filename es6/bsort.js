'use strict'
function swapIn(a) {
   for (let i=0;i<a.length-1;i++) {
      if (a[i] < a[i+1]) return a;
      let t = a[i+1];
      a[i+1] = a[i];
      a[i] = t;
   }
   return a;
}
function bsort(a) {
   console.log('sort: ' + a);
   if (a.length === 1) {
      return a;
   }
   let t = bsort(a.slice(1,a.length));
   t.unshift(a[0]);
   return swapIn(t);
}
const max = 100;
let a = [];
for (let i=0;i<1000;i++) {
   a.unshift(Math.floor(Math.random() * max));
}
console.log(a );
console.log(bsort(a) );
