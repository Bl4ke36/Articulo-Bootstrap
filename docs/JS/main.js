
async function getData()
{
  const response = await fetch("JS/data.json");
  const json = await response.json();

  let $HB = document.getElementById("higherBeings");
  let template = "";

  json.higherBeings.forEach(element => {
    template += `
    <li class="text">${element.name}: ${element.description}</li>
    `;
  });

  $HB.innerHTML=template;
}

getData();