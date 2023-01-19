/*const criptografar = document.querySelector("changeTocriptografar");

var input = document.querySelector("textarea");
var button =  document.querySelector("button");

if (minlength) == 0{

}

function changeE() {
    if(input == e){
        document.white("enter")
    }
}

button.onclick = verifica

if (minlength) == 0{

}

/*mostra a msg de nd esta digitado

@media (min-width: 375px){
    .show375 {
        height: 400px;
        width: 700px;
    }
}
const input = document.querySelector("#digite");


function a() {
    alert(foi ,uhu); 
}

const btDescriptografar = document.querySelector("bt-descriptografar");

btDescriptografar.addEventListener("click", a);
btDescriptografar.onclick = a;

function change() {
    document.write("oi") 
    alert("oi");
}


function a() {
    alert("oi");
}

const btDescriptografar = document.querySelector(".bt-descriptografar");


btDescriptografar.addEventListener("click", a){
    alert("oi");
}

function a() {
    alert("oi");
}

  document
    .querySelector('.bt-descriptografar')
    ?.addEventListener('click', criptografar);

    if nada escrito = output is true

    function criptografar() {
    if (input == e) {
        input.replace(enter) 
    }

    alert("resultado");
}

function descriptografar(){
    if(true) {
        output.replace(/enter/g, "e"); 
        output.replace(/imes/g, "i"); 
        output.replace(/ai/g, "a"); 
        output.replace(/ober/g, "o"); 
        output.replace(/ufat/g, "u");
    }
}
----------------
function criptografar() {
  alert('oi');
}

document
  .querySelector('.bt-descriptografar')
  ?.addEventListener('click', criptografar);
---------------------

    if (entradaTexto = a){
    entradaTexto.replace(/a/g, "ai");
    }         
    resultado.replace(/a/g, "ai"); 
    entradaTexto.replace(/e/g, "enter"); 
    entradaTexto.replace(/i/g, "imes"); 
    entradaTexto.replace(/o/g, "ober"); 
    entradaTexto.replace(/u/g, "ufat");
}

    if (typeof entradaTexto !== 'null') {
        resultCripto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    
      }
      


*/
var btCriptografar = document.querySelector('.bt-criptografar');
var btDescriptografar = document.querySelector('.bt-descriptografar');
var btCopiar = document.querySelector('.bt-copiar');
var entradaTexto = document.getElementById('input');
var saidaTexto = document.getElementById('output');

function criptografar() {
  var resultCripto = entradaTexto.value;
  entradaTexto.value = '';
  resultCripto = resultCripto
    .replace(/a/g, 'ai')
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  saidaTexto.value = resultCripto;

  var retangulo = document.querySelector('.rectangle-img');
  retangulo.parentNode.removeChild(retangulo);
}

function descriptografar() {
  var valorCriptografado = saidaTexto.value;
  saidaTexto.value = "";
  var valorDescriptografado = valorCriptografado
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  entradaTexto.value = valorDescriptografado;
}

// function copiaTexto () {
//   let textoCopiado = saidaTexto.value;

//   textoCopiado.select();
//   document.execCommand("copy");
//   alert("seu texto foi copiado!");
// }

btCopiar.addEventListener('click', ()=> {
  saidaTexto.select();
  document.execCommand('copy');
  swal({
    
    title: "seu texto foi copiado!"
  
  });

  btCopiar.value="";
});

btCriptografar?.addEventListener('click', criptografar);
btDescriptografar?.addEventListener('click', descriptografar);

