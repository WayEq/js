import 'babel-regenerator-runtime';
function* gen() {
   let name = yield 'name? ';
   let age = yield 'age? ';
   console.log(name + ' and ' + age);
}

let i = gen();
console.log(i.next().value);
console.log(i.next('aaron').value);
console.log(i.next('38').value);
i.next();
