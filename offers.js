const mySuggestions = document.querySelector(".my-suggestions");

const offer = [
  {
    logo: "fa fa-cutlery",
    name: "Pizza Paolo",
    description: "Zwei mega-Pizzen für den großen Hunger!"
  },
  {
    logo: "fa fa-cutlery",
    name: "Mama Marcellina",
    description:
      "Ein bisschen mit dies, ein bisschen mit das. Aber alles mit Liebe!"
  }
];

offer.forEach(function(item) {
  const suggestion = document.createElement("article");
  suggestion.classList.add("suggestion");
  const childHtml = `<i class="${item.logo}" aria-hidden="true"></i>
          <div>
            <h3>${item.name}</h3>
            <p>
            ${item.description}
            </p>
          </div>`;
  suggestion.innerHTML = childHtml;
  // console.log(item, childHtml);
  mySuggestions.appendChild(suggestion);
});
