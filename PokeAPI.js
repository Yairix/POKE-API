let button = document.getElementById("button")

button.addEventListener("click",() => {
    let infoPoke = document.getElementById("infoPoke").value;
    let img = document.getElementById("img");
    let info = document.getElementById("info");

    let url = new XMLHttpRequest();
    url.open("GET",`https://pokeapi.co/api/v2/pokemon/${infoPoke}`)
    url.send()

    url.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
        let dataPoke = JSON.parse(this.responseText);
        img.setAttribute("src",dataPoke.sprites.front_default)
        info.textContent = dataPoke.name
        }
    }
});