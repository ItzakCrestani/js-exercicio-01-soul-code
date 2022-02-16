let number1 = Number(prompt('Digite o 1° valor'))

let number2 = Number(prompt('Digite o 2° valor'))

let number3 = Number(prompt('Digite o 3° valor'))

if (number1 > number2 && number1 > number3) {
  alert('O valor ' + number1 + ' é o maior')
} else if (number2 > number1 && number2 > number3) {
  alert('O valor ' + number2 + ' é o maior')
} else {
  alert('O valor ' + number3 + ' é o maior')
}
