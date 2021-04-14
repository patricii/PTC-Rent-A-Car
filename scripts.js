function pesquisar(){

    var input, filtro, menu, menuItens, links;

    input = document.getElementById("pesquisa");
    filtro = input.nodeValue.toUpperCase();
    menu = document.getElementById("catalogo");
    menuItens = menu.getElementsByClassName("card-content");

    for(var i = 0 ; i <= menuItens.length ; i++)
    {
        links = getElementsByTagName("h3");
        if(links.innerHTML.toUpperCase().indexOf(filtro)){

        }

    }
}