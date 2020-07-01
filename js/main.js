function botao() {
    document.getElementById('hTop').innerHTML = "Top";
}

function outraPagina() {
    window.open("https://www.facebook.com/")
    // window.location.href ="https://www.facebook.com/";
}

function mudar(elemento) {
    elemento.innerHTML = "passou"
}

function voltar(elemento) {
    elemento.innerHTML = "voltou"
}


/*
function soma(n1, n2) {
    return n1 + n2
}

var d = new Date();

console.log(d.getMonth())

//var idade = prompt("Qual é sua idade ? ");
var nome = 'Juan';
//alert('Bem vindo ' + nome);

var lista = ["maca", "pera", "laranja"];
lista.push("uva");
lista.pop(); //retira ultimo

lista.reverse();

lista.join(" - ");



/*
if (idade >= 18) {
    alert("maior de idade");
} else {
      alert("Menor de Idade");
}

var count = 0
while (count < 5) {
    console.log(count);
    count++;
};*/