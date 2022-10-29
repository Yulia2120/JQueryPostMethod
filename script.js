const ROOT_NOTES = document.getElementById("notes");
let CATALOG = [];

class Notes {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ title, content }) => {
      htmlCatalog += `
      <li class="notes-element">
          <span class="notes-element__title">${title}</span>
          <span class="notes-element__text">${content}</span>  
      </li>
  `;
    });
    const html = `
    <ul class="notes-container">
        ${htmlCatalog}
    </ul>
`;

    ROOT_NOTES.innerHTML = html;
  }
}
function renderL() {
  const notes = new Notes();
  notes.render();
}

$.post("http://teddi2518-001-site1.gtempurl.com/api/Admin", {
  title: "string",
  content: "string",
  id: 0,
}).done(function (data) {
  alert("Data Loaded: " + data);
});

let l = $.get("http://teddi2518-001-site1.gtempurl.com/api/Admin");
l.done((body) => {
  console.log(body);
  CATALOG = body;
  renderL();
});
