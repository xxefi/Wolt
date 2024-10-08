import { Box, Button, SimpleGrid, Tooltip } from "@chakra-ui/react";
import ProductsBox from "../catalog-boxes/ProductsBox";
import fetchProducts from "./products.js";
import { useEffect, useState } from "react";
import Filters from "./Filters.jsx";

const PRODUCTS_FER_PAGE = 6;

export default function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts(filter);
      setProducts(productsData);
    };
    loadProducts();
  }, [filter]);

  const totalProducts = products?.length;
  const totalPages = Math.ceil(totalProducts / PRODUCTS_FER_PAGE);

  const handlePageChange = (pageN) => {
    setCurrentPage(pageN);
  };

  const currentProducts = products?.slice(
    (currentPage - 1) * PRODUCTS_FER_PAGE,
    currentPage * PRODUCTS_FER_PAGE
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Filters filter={filter} setFilter={setFilter} />
      <SimpleGrid columns={[1, null, 3]} spacing="30px">
        {currentProducts?.length ? (
          currentProducts.map((product) => (
            <ProductsBox
              key={product.id}
              imageSrc={product.imageSrc}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))
        ) : (
          <p>No data found</p>
        )}
      </SimpleGrid>

      <Box textAlign="center" mt={10}>
        {totalPages > 1 && (
          <Box mb={4}>
            <Button
              isDisabled={currentPage === 1}
              mx={1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              ‹
            </Button>
            {Array.from({ length: totalPages }, (_, index) => (
              <Tooltip
                key={index + 1}
                label="Click to switch"
                bg="black"
                p={2}
                borderRadius={5}
              >
                <Button
                  key={index + 1}
                  borderRadius={10}
                  onClick={() => handlePageChange(index + 1)}
                  mx={1}
                  variant={currentPage === index + 1 ? "solid" : "outline"}
                >
                  {index + 1}
                </Button>
              </Tooltip>
            ))}
            <Button
              isDisabled={currentPage === totalPages}
              mx={1}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              ›
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
