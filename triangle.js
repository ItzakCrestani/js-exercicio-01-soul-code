let side1 = Number(prompt('Digite a medida do primeiro lado do triângulo'))

let side2 = Number(prompt('Digite a medida do segundo lado do triângulo'))

let side3 = Number(prompt('Digite a medida do terceiro lado do triângulo'))

if (side1 == side2 && side2 == side3) {
  alert('É um triângulo equilátero')
} else if (side1 == side3 || side1 == side2 || side2 == side3) {
  alert('É um triângulo isósceles')
} else {
  alert('É um triângulo escaleno')
}
