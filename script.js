function mediaFinal() {

    var aluno = document.getElementById("nome");
    var n1 = document.getElementById("nota1");
    var n2 = document.getElementById("nota2");
    var n3 = document.getElementById("nota3");
    var media = ((parseFloat(n1.value)) + (parseFloat(n2.value)) + (parseFloat(n3.value))) / 3;

    //validação de nome não preenchido
    if (aluno.value == "") {
        alert('Nome não informado. Tente novamente.');
        aluno.focus();

    } else {

        //validação de notas vazias
        if ((n1.value == "") || (n2.value == "") || (n3.value == "")) {
            alert('Nota não informada. Tente novamente.');

        } else {

            //validação de notas negativas ou superiores a 10 
            if (((n1.value > 10) || (n1.value < 0)) || ((n2.value > 10) || (n2.value < 0)) || ((n3.value > 10) || (n3.value < 0))) {
                alert('Erro: verifique as notas digitadas e tente novamente');
                
            } else {

                //cálculo da média e apresentação do resultado final
                if (media >= 7) {
                    resultado.style.color = "#00008B";
                    resultado.style.fontWeight = "bold";
                    resultado.innerHTML = `Aluno: ${aluno.value} <br> Média final: ${media.toFixed(2)} <br> Resultado final: APROVADO!`;

                } else {
                    resultado.style.color = "#B22222";
                    resultado.style.fontWeight = "bold";
                    resultado.innerHTML = `Aluno: ${aluno.value} <br> Média final: ${media.toFixed(2)} <br> Resultado final: REPROVADO!`;
                }
            }
        }
    }
}