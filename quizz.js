//cria array vazia, aqui vao ficar todos os ids
const AllId = []

function GetId(btn_id)
{
    //transforma id em id
    const id = parseInt(btn_id)
    //Envia pra array vazia o valor do ID
    AllId.push(id)
    //Soma os valores presentes na array
    const sum = AllId.reduce((partialSum, a) => partialSum + a, 0);
    //Se a soma for 8 apresenta pagina html especifica para valor 8
    //apenas modificar o if, nada acima
    if(sum == 9){
        //abre pagina html
        window.location.href='resposta.html'
    }
    if(sum == 45){
      //abre pagina html
      window.location.href='resposta2.html'
  }
  if(sum == 32){
    //abre pagina html
    window.location.href='resposta3.html'
} 

  if(sum == 53){
  //abre pagina html
  window.location.href='resposta4.html'
}

if(sum == 404){
  //abre pagina html
  window.location.href='resposta5.html'
}

}

function MudaCor(id_btn) {
  //armazena nessa variavel o id do botao clicado
  var property = document.getElementById(id_btn);
  //adiciona no id do botao um estilo
  property.style.backgroundColor = 'salmon'
  property.style.color = 'white';
}


    
