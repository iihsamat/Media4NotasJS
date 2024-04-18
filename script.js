alert("Média de 4 notas");

let n1 = parseInt(prompt("Digite sua primeira nota:"));
let n2 = parseInt(prompt("Digite sua segunda nota:"));
let n3 = parseInt(prompt("Digite sua terceira nota:"));
let n4 = parseInt(prompt("Digite sua quarta nota:"));

let media;
let resultado;

if (n1 < 0 || n1 > 10 ||
    n2 < 0 || n2 > 10 ||
    n3 < 0 || n3 > 10 ||
    n4 < 0 || n4 > 10) {
    
        alert("Digite somente notas entre 0 e 10.");

} else {

    media = (n1 + n2 + n3 + n4) / 4;

    if (media < 5) {
        resultado = "Reprovado";
    } else if (media >= 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Recuperação";
    }

    alert("Você ficou com média: " + media + ". " + "Resultado: " + resultado);
}