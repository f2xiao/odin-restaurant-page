export default function (title = "title", content = "content", subs=[]) {
 let template = `<h1>${title}</h1><ul>`;
  const generateList = (subs) => subs?.map(({subtitle, subcontent})=>`<li><h2>${subtitle}</h2><p>${subcontent}</p></li>`).join("");
  template += generateList(subs);
  template += `</ul>`;

  const getName = () => title;
  const getTemplate = () => template;
  const setTemplate = (html) => template = html;

  return {getName, getTemplate, setTemplate}
}