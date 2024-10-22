
  const movies = [{
    search: "Alice no País das Maravilhas",
    url: "alice.html"
  },
  {
    search: "Harry Potter e a Pedra Filosofal",
    url: "harry.html"
  },
  {
    search: "Karate Kid",
    url: "karate.html"
  }
];

// Estes elementos servirão para a manipulação do DOM: elementos HTML
const search = document.getElementById("search");
const list = document.getElementById("biomas");

// Aqui atribuímos uma função ao evento `keyup` do campo no HTML
// Isto é, sempre que uma tecla for pressionada, a função será executada:
search.addEventListener("keyup", function(event) {

  // Filtramos a lista de filmes com base no texto digitado:
  const matchs = movies.filter(value => {

    // Se o texto digitado for encontrado no título, retorna o registro:
    return value.search.indexOf(this.value) !== -1;

  });
   
  // Exibe no HTML a lista de filmes do resultado do filtro anterior:
  list.innerHTML = "";
  for (let movie of matchs) {
    list.innerHTML += "<li><a href='"+movie.url+"'>"+movie.title+"</a></li>";
  }
});
