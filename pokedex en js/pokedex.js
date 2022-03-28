const fetchpokemon = () =>{
    const pokename = document.getElementById("pokename");
    let pokeinput = pokename.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;
    fetch(url).then((res) =>{
        if(res.status != "200" ){
            console.log(res);
            pokemage("./imagens/pikachu-sad.gif");
        }else{
            return res.json();
        }
    }).then((Data) =>{
        console.log(Data);    
        let pokeimg = Data.sprites.front_default;
        console.log(pokeimg);
        pokemage(pokeimg);
    })
}

const pokemage = (url) =>{
    const pokeimg = document.getElementById("pokeimg");
    pokeimg.src = url;
}



fetchpokemon();
    

