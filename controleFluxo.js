//Exercícios capítulo 5

//Questão 1
let numero = prompt("Digite um número: ");

if (numero % 2 === 0) {
    console.log("O número é par.")
}
else {
    console.log("O número é ímpar.")
}

//Questão 2
let a1 = prompt("Digite o primeiro número: ");
let a2 = prompt("Digite o segundo número: ");
let a3 = prompt("Digite o terceiro número: ");

if ((a1 > a2) & (a1 > a3)) {
    console.log(a1);
} else if ((a2 > a1) & (a2 > a3)) {
    console.log(a2);
}
else {
    console.log(a3);
}

//Questão 3
let nota1 = parseFloat(prompt("Insira a primeira nota: "));
let nota2 = parseFloat(prompt("Insira a segunda nota: "));
let nota3 = parseFloat(prompt("Insira a terceira nota: "));
let soma = nota1 + nota2 + nota3;
let media = soma / 3;

if (media >= 7) {
    console.log("PARABÉNS! Você foi aprovado!");
}
else {
    console.log("Que pena, você foi reprovado.");
}

//Questão 4
let ano = prompt("Digite o seu ano de nascimento: ");

if (ano <= 2007) {
    console.log("Você já é maior de idade.");
}
else {
    console.log("Você ainda não é maior de idade.");
}

//Questão 5
let escolha = prompt("Escolha a conversão:\n1 - Celsius para Fahrenheit \n2 - Fahrenheit para Celsius");
let temperatura = parseFloat(prompt("Digite uma temperatura: "));

if (escolha === "1") {
    let fahrenheit = (temperatura * 9 / 5) + 32;
    console.log("A temperatura " + temperatura + "°C equivale a " + fahrenheit.toFixed(2) + "°F.");
}
else if (escolha === "2") {
    let celsius = (temperatura - 32) * 5 / 9;
    console.log("A temperatura " + temperatura + "°F equivale a " + celsius.toFixed(2) + "°C.");
}
else {
    console.log("Insira uma opção válida");
}

//Questão 6
let numero1 = parseFloat(prompt("Insira um número: "));
let numero2 = parseFloat(prompt("Insira outro número: "));

if (numero1 % numero2 === 0) {
    console.log("Pelo menos um dos número é múltiplo do outro.");
} else if (numero2 % numero1 === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro.");
}
else {
    console.log("Nenhum dos números é múltiplo do outro.");
}

//Questão 7
let angulo1 = parseFloat(prompt("Insira um ângulo de um triângulo: "));
let angulo2 = parseFloat(prompt("Insira outro ângulo de um triângulo: "));
let angulo3 = parseFloat(prompt("Insira só mais um ângulo de um triângulo: "));

if (angulo1 + angulo2 > angulo3 && angulo1 + angulo3 > angulo2 && angulo2 + angulo3 > angulo1) {
    if (angulo1 === angulo2 && angulo2 === angulo3) {
        console.log("É um Triângulo Equilátero.");
    } else if (angulo1 === angulo2 || angulo1 === angulo3 || angulo2 === angulo3) {
        console.log("É um Triângulo Isósceles.");
    }
    else {
        console.log("É um Triângulo Escaleno.");
    }
}
else {
    console.log("É um Triângulo Inválido.");
}

//Questão 8
let opcao = prompt("Escolha o prato de sua preferência: \n1 -Pizza. \n2 -Hambúrguer. \n3 -Salada. \n4 -Macarrão.");
switch (opcao) {
    case "1":
        console.log("Prato escolhido: Pizza. \nPreço do produto: R$ 45,00 \nDescrição: Quatro Estações. (Mussarela, calabresa, frango e milho)");
        break;
    case "2":
        console.log("Prato escolhido: Hambúrguer. \nPreço do produto: R$ 15,00 \nDescrição: 2 blends de carne, ovo, tomate, cebola, alface e molho picante.");
        break;
    case "3":
        console.log("Prato escolhido: Salada. \nPreço do produto: R$ 5,00 \nDescrição: Alface, tomate, pepino e limão.");
        break;
    case "4":
        console.log("Prato escolhido: Macarrão. \nPreço do produto: R$ 7,00 \nDescrição: Macarrão e molho de tomate.")
}

//Questão 9
let altura = parseFloat(prompt("Insira sua altura: "));
let peso = parseFloat(prompt("Insira o seu peso: "));
let imc = peso / (altura ** 2);

if (imc < 18.5) {
    console.log(`Você está magrelo e sem moral. Seu IMC é ${imc.toFixed(2)}.`);
} else if ((imc >= 18.5) && (imc <= 24.9)) {
    console.log(`Você está normal, perante às normas impostas pela sociedade. Seu IMC é ${imc.toFixed(2)}.`);
} else if ((imc >= 25) && (imc<= 29.9)) {
    console.log(`Você está gordinho. Seu IMC é ${imc.toFixed(2)}.`);
}
else {
    console.log(`Você está obeso paizão, vamo melhorar isso aí. Seu IMC é ${imc.toFixed(2)}.`);
}