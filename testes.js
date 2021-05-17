    
    const min = 0
    const max = 4
    const sorte = Math.floor(Math.random() * (max - min + 1)); 
    const listaDePokemons = [
        ["sobble","https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png"],
        ["bubasauro","https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"],
        ["charmander","https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"],
        ["squirtle","https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"],
        ["pikachu","https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"],
        ["raichu","https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png"],
        ["pichu"], ["https://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png"],
        ["charizard","https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"],
        ["onix","https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png"]
    ]
    let sorteado = []
    for(i=0; i < listaDePokemons.length; i++){
        for( c=0; c < listaDePokemons.length; c++){
                pokemonSorteado = listaDePokemons[sorte][0]
                imagemDoPokemon = listaDePokemons[sorte][1]
                }
            }
            document.querySelector("img").src = imagemDoPokemon 
    var pokemon = pokemonSorteado 
          	
    function resposta(){
        let respo = "pokemon"
        let s = pokemon         
        respo = document.querySelector("input").value.toLowerCase()
        
        if(respo == ''){
            document.querySelector("h1").innerHTML = " Digite o nome do pokemon"
        }else{
            if(respo == s){
                
                //console.log("VOCE ACERTOU : ",s)
                document.querySelector("h1").innerHTML = ("PARABENS ! Você Capturou o "+ s +" :)");
                document.querySelector("img").style.opacity = 1;  
                setTimeout(function(){window.location.reload(1)},5000);                      
            }else{
                
                document.querySelector("h1").innerHTML = ("Você não Capturou o "+ s +" :( ")
                document.querySelector("img").style.opacity = 1;
                setTimeout(function(){window.location.reload(1)},5000);
            } 
         }       
        //document.getElementById("acerto").innerHTML = acerto
        //document.getElementById("erro").innerHTML = erro     
  }
  
  









/*
function indice(){
    const min = 0
    const max = 4
    return sorte = Math.floor(Math.random() * (max - min + 1));      
}

function escolhePokemon(p){
    p = indice()

    const listaDePokemons = ["sobble","bubasauro","charmander","squirtle","pikachu"]
    console.log(sorteado = listaDePokemons[p])
    return sorteado = listaDePokemons[p]
}

function escolheImagem(p){
    p = indice()
    
    var url = [
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/816.png",//souble
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",//bubas
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png", //charman
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",//squatle
        "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" // pikachu
    ]// sortear pokemon   	
    
       // console.log(document.querySelector("img").src = url[p])
        console.log(url[p]) 
}

function resposta(){
    escolhePokemon()  
    escolheImagem()
    //alert("Olá Jogador, Vamos ver se vc é esperto!\nClick no Botão oara Sortear um Pokemon")
}  

resposta()
*/