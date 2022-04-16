// New elements
// __________________________________________________
const newElements = (args = {
  tag: undefined,
  textContent: undefined,
  id: undefined,
  classList: undefined,
  attribute: undefined,
  parentNode: undefined,
  childNodes: undefined,
  pastMethod: undefined,
  clearParentNode: undefined,
}) => {
  // Variadles
  const arg = {
    tag: args.tag|| undefined,
    textContent: args.textContent || undefined,
    id: args.id || undefined,
    classList: args.classList || undefined,
    attribute: args.attribute || undefined,
    parentNode: args.parentNode || undefined,
    childNodes: args.childNodes || undefined,
    pastMethod: args.pastMethod || 'append',
    clearParentNode: args.clearParentNode || false,
  }

  // Create element 
  const element = document.createElement(args.tag);

  // Condition
  if (arg.textContent !== undefined) {
    element.textContent = arg.textContent;
  }
  
  if (arg.id !== undefined) {
    element.id = arg.id;
  }
  
  if (arg.classList !== undefined) {
    for (const key in arg.classList) {
      element.classList.add(arg.classList[key]);
    }
  }
  
  if (arg.attribute !== undefined) {
    for (const key in arg.attribute) {
      element.setAttribute(key, arg.attribute[key]);
    }
  }

  if (arg.childNodes !== undefined){
    for (const key in arg.childNodes) {
      element.append(arg.childNodes[key])
    }
  }

  if (arg.parentNode !== undefined) {
    if (arg.pastMethod === 'append') {
      document.querySelector(arg.parentNode).append(element);
    } else if (arg.pastMethod === 'prepend') {
      document.querySelector(arg.parentNode).prepend(element);
    }
  } else {
    return element;
  }

}

export default newElements;