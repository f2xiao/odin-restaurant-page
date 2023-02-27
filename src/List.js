export default function (content = []) {
  const generateLiHtml = (content=[]) => content?.map(({title, description,price})=>`<li><h3>${title}</h3><p>${description}</p><p>${price}</p></li>`).join("");

  const template = generateLiHtml(content)? `<ul>${generateLiHtml(content)}</ul>` :'';

  const getTemplate = () => template;
  
  return {
    getTemplate
  }
}