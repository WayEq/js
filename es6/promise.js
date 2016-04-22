function p() {

   console.log('in p before promise');
   return new Promise(function(resolve) {
      console.log('in promises supplied function');
      resolve('yup');
   });
}
console.log('before p()');
p().then(function (msg) {
   console.log(msg);
});
console.log('after calling p, main body. ending script.');
