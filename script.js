const listaDePokemons = [
    "Sobble","Bubasauro","Charmander","Squirtle","Pikachu"
]
const url = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
]// sortear pokemon

function rand(){
    const min = 0
	const max = 4
    return sorteio = Math.floor(Math.random() * (max - min + 1) );	
}
 
function sorteio() {
    let sorteado = rand();
    //criar imagem no documento
    var psorteado = listaDePokemons[sorteado];
    let img = document.createElement("img"); // cria o elemento img na tag div img
    img.src = url[sorteado]; // recebe a imagem do vetor de imagem sorteada
    document.getElementById("imagem").appendChild(img); // inclui a imagem criada na div imagem
    document.querySelector("h1").innerHTML = psorteado;
    console.log(psorteado, " -", sorteado);

} 

function responde(){    
    let resposta = document.querySelector("input").value
    resposta.toString
    if(!resposta){
        alert("Digite o nome do pokemon")
    }else{
        for(i=0; i < listaDePokemons.length; i++){
            if(listaDePokemons[i] == resposta){
                console.log("Certo ",resposta, " - ",listaDePokemons[i])
            }else{
                console.log("Errado ",resposta, " - ",listaDePokemons[i])
                break
            }
            
        }
    }
    
    

}