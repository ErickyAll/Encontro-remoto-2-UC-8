//Programar um sistema de controle de alunos de uma escola, considerando a quantidade de alunos de 0 ao número total
//Se o número for par, escreva 'par' e o número correspondente
//Se o número for ímpar, escreva 'ímpar' e o número correspondente
//Se o número for zero, escreva 'zero' e o número correspondente

for (let alunos = 0; alunos <= 17; alunos++) {
  if (alunos == 0) {
    console.log('quantidade nula ' + alunos)
  } else {
    //avaliar se é par ou ímpar

    if (alunos % 2 == 0) {
      //par
      console.log('quantidade par ' + alunos)
    }

    if (alunos % 2 == 1) {
      //ímpar
      console.log('quantidade ímpar ' + alunos)
    }
  }
}
