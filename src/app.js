/* eslint-disable */
import "bootstrap";
import "./style.css";

let pronoun = ["the", "our", "he", "his", "she", "her", "yours"];
let adj = ["great", "big", "bored", "small"];
let noun = ["jogger", "racoon", "New-York", "Miami"];
let dom = [".com", ".us", ".net", ".io"];

function generateDomName() {
  // generate a ramdon web domain
  return (
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    dom[Math.floor(Math.random() * dom.length)]
  );
}

let domNames = []; //array  of ramdon domNames!
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dom.length; l++) {
        domNames.push(pronoun[i] + adj[j] + noun[k] + dom[l]);
      }
    }
  }
}

// Js generator function
function* domLoger() {
  let i = 0;
  while (i < domNames.length) {
    yield console.table(domNames.splice(i, i + 10));
    i++;
  }
}

const domainLogerGenerator = domLoger();
// print in the console 10 random domains
console.log(generateDomName());
console.table(domNames.slice(0, 10));
console.log("Total number of doms: " + domNames.length);

document.querySelector("#dom-name").innerHTML = generateDomName();

document.querySelector("#generate-dom").addEventListener("click", function() {
  document.querySelector("#dom-name").innerHTML = generateDomName();
  console.log(domainLogerGenerator.next().value);
});
