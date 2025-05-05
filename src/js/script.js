//declarando um array de imagens

let imagens =[
    'src/assets/imagem1.jpg;',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
]

//declarando as variaveis

let i=0
let tempo= 2000;

//criando a função do slideshow

function slideshow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if( i== imagens.length){
        i=0;
    }    
    setTimeout("slideshow()",tempo)

}
slideshow();