const input$$ = document.querySelector("input");
const button$$ = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const divEmpty$$ = document.querySelector(".empty");

const newList = () => {
  button$$.addEventListener("click", (e) => {
    e.preventDefault();
    const texto = input$$.value;

    if (input$$.value !== "") {
      let newLi$$ = document.createElement("li");
      let newP$$ = document.createElement("p");
      newP$$.textContent = texto;
      newLi$$.appendChild(newP$$);
      ul.appendChild(newLi$$);
      newLi$$.appendChild(btnDelete());
      divEmpty$$.style.display = "none";
    }
  });
};

newList();

function btnDelete() {
  const newButton$$ = document.createElement("button");
  newButton$$.className = "btn-delete";
  newButton$$.textContent = "X";

  newButton$$.addEventListener("click", (d) => {
    const elemento = d.target.parentElement;
    ul.removeChild(elemento);
  });

  return newButton$$;
}
