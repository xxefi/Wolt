import axios from "axios";

const fetchProducts = async (filter) => {
  try {
    const response = await axios.get(
      "https://localhost:7272/api/Products/GetProducts",
      {
        params: {
          query: filter?.search,
          sortBy: filter?.sortOption,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.error(e.message);
  }
};
export default fetchProducts;
