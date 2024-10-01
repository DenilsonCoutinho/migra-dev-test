/*
3 - Remover Elementos Falsos

Implemente uma função que receba um array e remova todos os valores que sejam falsos no contexto lógico de JavaScript.
Por exemplo, dado o array [0, 1, false, 2, "", 3], o retorno deve ser [1, 2, 3].
*/

export function removeFalsy(arr) {
  return arr.filter(Boolean)
}

removeFalsy([0, 1, false, 2 , "", 3])