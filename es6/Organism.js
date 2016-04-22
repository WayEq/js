'use strict';
const debug = require('debug')('main');

const genes = 'abcdefghijklmnopqrstuvwxyz';
module.exports =
class Organism {

   static genRandom(genomeLength) {
      let org = '';
      for (let i=0;i<genomeLength;i++) {
         org += genes.charAt(Math.floor(Math.random() * genes.length));
      }
      return new Organism(org);
   }

   constructor(genome) {
      this.genome = genome;
   }

   toString () {
      return this.genome + ' ' + this.fitness;
   }
   breed(partner,mutationChance) {
      debug('breeding: ' + this + partner);
      let newOrg = '';
      for (let i=0;i<this.genome.length;i++) {
         if (Math.random() > mutationChance) {
            newOrg += genes.charAt(Math.floor(Math.random() * genes.length));
         } else {
            if (Math.random() > .5) {
               newOrg += this.genome[i];
            } else {
               newOrg += partner.genome[i];
            }
         }
      }
      return new Organism(newOrg);
   }
};
