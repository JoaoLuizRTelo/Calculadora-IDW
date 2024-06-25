function insert(num) {
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function limpar() {
    document.getElementById('result').innerHTML = ""
}

function apagar() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById("result").innerHTML = resultado.substring(0, resultado.length - 1);
}

function igual() {
    var resultado = document.getElementById('result').innerHTML;
    if (resultado) {
        try {
            var calculado = eval(resultado);
            var formatado = parseFloat(calculado.toPrecision(15));
            document.getElementById('result').innerHTML = formatado;
        } catch (e) {
            document.getElementById('result').innerHTML = "Erro";
        }
    } else
    {
        document.getElementById('result').innerHTML = "Vazio..."
    }
}

function subschar(c){
    
}