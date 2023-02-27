import List from "./List";

export default function (content = []) {

  const generateList = (content=[]) => content?.map(({subtitle, description='', subcontent=[]}) => `<h2>${subtitle}</h2><p>${description}</p>${List(subcontent).getTemplate()}`);

  const template = generateList(content);

  const getTemplate = () => template;
  
  return {
    getTemplate
  }
}