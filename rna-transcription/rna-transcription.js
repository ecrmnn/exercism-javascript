'use strict';

const dnaToRna = {G: 'C', C: 'G', T: 'A', A: 'U'};

module.exports = function () {
  this.toRna = dna => {
    let rna = '';

    dna.split('').forEach(dna => {
      rna += dnaToRna[dna];
    })

    return rna;
  }
}