import ListWrapper from "./ListWrapper";

export default function (title = "title", content = []) {
  let h1Html = `<h1>${title}</h1>`;

  const generateList = ListWrapper(content).getTemplate();
  let template = `<div>${h1Html}${generateList}</div>`;
 
  const getName = () => title;
  const getTemplate = () => template;
  const setTemplate = (html) => template = html;

  return {getName, getTemplate, setTemplate}
}