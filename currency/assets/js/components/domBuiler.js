// New elements
// __________________________________________________
const newElements = (template) => {
  // Variables
  const el = document.createElement('template');

  el.innerHTML = template.trim();

  return el.content.firstChild;
}

export default newElements;