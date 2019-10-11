/**
 * Foi introduzido um novo laço de controle na nova versão do ECMAScript
 * o For of interage encima de valores do array, diferentemente do For in que interage nos indeces
 */

const vetor = ['primeiroValor', 'segundoValor', 'terceiroValor']

for (const valor of vetor) {
    console.log(valor)
}

for (const indece in vetor) {
    console.log(indece)
}