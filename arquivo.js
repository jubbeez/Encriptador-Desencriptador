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

