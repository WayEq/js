'use strict';
const debug = require('debug')('main');
const Organism = require('./Organism.js');
const keypress = require('keypress');

const poolSize = 20;
const targetGenome = 'aaron';
const cullRate = .1;
const breedRate = .1;

function evalFitness(org,target) {

   let fitness = 0;
   for (let i=0;i<org.genome.length;i++) {
      if (org[i] == target[i]) {
         fitness++;
      }
   }
   return fitness;
}


keypress(process.stdin);

let pool = [];
pool.bestFitness = {};

for (let i=0;i< poolSize;i++) {
   let org = Organism.genRandom(targetGenome.length);
   org.fitness = evalFitness(org,targetGenome);
   pool.push(org);
}

debug(pool);
let perfectFitness = targetGenome.length;

function runGeneration() {
   debug('run generation');
   if (pool.bestFitness === perfectFitness) {
      debug('done.');
      process.exit(0);
   }
   pool.sort((a,b) => {
      return a.fitness - b.fitness;
   });
   pool.bestFitness = pool[pool.length - 1];
   let cull = Math.ceil(pool.length * cullRate);
   let breed = Math.ceil(pool.length * breedRate * 2);
   debug('culling: ' + pool.slice(0,cull));
   pool = pool.slice(cull);
   let breeders = pool.slice(pool.length - breed);
   while (breeders.length > 0) {
      let child = breeders.shift().breed(breeders.shift());
      child.fitness = evalFitness(child,targetGenome);
      pool.unshift(child);
   }
   debug(pool);
   debug('best fitness: ' + pool.bestFitness);
}

runGeneration();
process.stdin.on('keypress',function(ch,key) {
   if (key && key.ctrl && key.name == 'c') {
      process.exit(0);
   } else {
      runGeneration();
   }

});

process.stdin.setRawMode(true);
process.stdin.resume();
