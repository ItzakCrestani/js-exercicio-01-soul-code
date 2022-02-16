let number1 = Number(
  prompt(
    'Vamos inverter uns valores? Digite um número inteiro para representar a unidade X:'
  )
)

let number2 = Number(
  prompt('Digite um número inteiro para representar a unidade Y:')
)

let number3 = number1
number1 = number2
number2 = number3

alert(
  'O valor de X era: ' +
    number3 +
    '. E agora é: ' +
    number1 +
    '. O valor de Y era: ' +
    number1 +
    '. E agora é: ' +
    number3
)
