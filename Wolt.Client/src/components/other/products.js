import axios from "axios";

const fetchProducts = async (filter) => {
  try {
    const response = await axios.get(
      "https://localhost:44365/api/Products/GetWoltProducts"
    );
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
};
export default fetchProducts;