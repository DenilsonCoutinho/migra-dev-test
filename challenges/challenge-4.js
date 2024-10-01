/*
4 - Validar Palíndromo

Implemente uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de frente para trás).
Por exemplo, "arara" e "ana" são palíndromos, enquanto "banana" não é.
*/

export function isPalindrome(str) {
  const myStr = str.split("")
  const lastIndexStr = myStr.pop()

  if (lastIndexStr === myStr[0]) {
    return true
  }
  return false
}

isPalindrome("arara")