// Ajax
// __________________________________________________
export const ajax = async (link, params) => {
  const response = await axios(link , { params });
  
  return response.data;
}