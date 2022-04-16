// Ajax
// __________________________________________________
const ajax = async (link) => {
  const response = await axios.get(link).then(res => {
    return res.data;
  });
  
  return response;
}

export default ajax;