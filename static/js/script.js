async function insertData() {
  fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(data => populatePage(data));
}
async function populatePage(data) {
  var count = Object.keys(data).length;
  console.log(count);
  var countPlusOne = count + 1;
  for (let i = 0; i < countPlusOne; i++) {
    var currentResult = data.results[i];
    addItem(currentResult);
  }
}
function addItem(data) {
  var itemNames = Object.keys(data);
  var itemValues = Object.values(data);
  addElement('div', data.name, 'document', null);
  addElement('p', `${data.name}-name`, `${data.name}-div`, itemValues[0]);
  addElement('p', `${data.height}-height`, `${data.name}-div`, `${data.height} cm`);
  addElement('p', `${data.mass}-mass`, `${data.name}-div`, `${data.mass} kilograms`);
  addElement('p', `${data.hair_color}-hair_color`, `${data.name}-div`, `Hair color: ${data.hair_color}`);
  addElement('p', `${data.skin_color}-skin_color`, `${data.name}-div`, `Skin color: ${data.skin_color}`);
  addElement('p', `${data.eye_color}-eye_color`, `${data.name}-div`, `Eye color: ${data.eye_color}`);
  addElement('p', `${data.birth_year}-birth_year`, `${data.name}-div`, `Birth year: ${data.birth_year}`);
  addElement('br', null, `document`, null);
  addElement('br', null, `document`, null);
  var height = document.getElementById[`${data.name}-height`];
}
function addElement(type, name, where, content) {
  console.log(where);
  if (where == "document") {
    var element = document.createElement(type);
    element.id = `${name}-${type}`;
    element.innerHTML = content;
    document.body.appendChild(element);
  } else {
    var addTo = document.getElementById(where);
    var element = document.createElement(type);
    element.id = `${name}-${type}`;
    element.innerHTML = content;
    addTo.appendChild(element);
  }
  /*type = type of element
  name = id of element to add
  where = location to append element
  content = innerHTML of element
  */
}