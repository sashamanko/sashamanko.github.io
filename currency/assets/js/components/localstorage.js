// Local storage
// __________________________________________________

function localStor (args = {
  method: undefined,
  key: undefined,
  value: undefined,
}) {
  // Variables
  const arg = {
    method: args.method,
    key: args.key,
    value: JSON.stringify(args.value) || undefined,
  }

  if (arg.method === 'set') {
    localStorage.setItem(arg.key, arg.value);
  }

  if (arg.method === 'get') {
    return JSON.parse(localStorage.getItem(arg.key));
  }
}

export default localStor;