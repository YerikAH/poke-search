const $input = document.getElementById("input");
const $btn = document.getElementById("btn");
const $fragment = document.createDocumentFragment();
const $yesApi = document.getElementById("yes-api");
const $noApi = document.getElementById("noApi");
const $error = document.getElementById("error");
let parg = document.createElement("h4");

let image = document.createElement("img");
let type = document.createElement("span");
let desp = document.createElement("p");

$btn.addEventListener("click", (e) => {
  let form = $input.value;
  async function getData() {
    try {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${form}/`);
      let otherRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${form}/`
      );
      let json = await res.json();
      let jsonOther = await otherRes.json();
      if (!res.ok) throw { status: res.status, statusText: res.statusText };
      if (!otherRes.ok)
        throw {
          statusOther: otherRes.status,
          statusTextOther: otherRes.statusText,
        };
      $noApi.style.display = "none";
      let name = json.name;
      let img = json.sprites.front_default;
      let typePokemon = json.types[0].type.name;
      let description = jsonOther.flavor_text_entries[0].flavor_text;
      let convertName = name.toUpperCase();
      desp.innerHTML = `${description}`;
      parg.innerHTML = `${convertName}`;
      type.innerHTML = `TYPE: ${typePokemon}`;
      image.setAttribute("src", `${img}`);
      switch (typePokemon) {
        case "fire":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#f9a052`;
          type.style.color = `#f9a052`;
          break;
        case "grass":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#8fcc8f`;
          type.style.color = `#8fcc8f`;
          break;
        case "electric":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#fdd53b`;
          type.style.color = `#fdd53b`;
          break;
        case "water":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#96c4ff`;
          type.style.color = `#96c4ff`;
          break;
        case "ground":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#7d6255`;
          type.style.color = `#7d6255`;
          break;
        case "rock":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#979797`;
          type.style.color = `#979797`;
          break;
        case "poison":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#d58bd0`;
          type.style.color = `#d58bd0`;
          break;
        case "bug":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#ffa3b3`;
          type.style.color = `#ffa3b3`;
          break;
        case "dragon":
          parg.style.background = `none`;
          parg.style.background = `linear-gradient(84deg, rgb(255, 133, 133) 0%, rgb(132, 196, 255) 100%) repeat scroll 0% 0%`;
          type.style.color = `rgb(255, 133, 133)`;
          break;
        case "psychic":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#9981b0`;
          type.style.color = `#9981b0`;
          break;
        case "normal":
          parg.style.background = `none`;
          parg.style.backgroundColor = `#bbbcd0e3`;
          type.style.color = `#bbbcd0e3`;
          break;

        default:
          parg.style.background = `none`;
          parg.style.backgroundColor = `#424b5c`;
          type.style.color = `#424b5c`;
          break;
      }

      $fragment.appendChild(image);
      $fragment.appendChild(parg);
      $fragment.appendChild(desp);
      $fragment.appendChild(type);
      $yesApi.appendChild($fragment);
    } catch (err) {
      $error.style.opacity = "1";
      setTimeout(() => {
        $error.style.opacity = "0";
      }, 4000);
    }
  }
  getData();
});
