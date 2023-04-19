import LoadingComponent from "../../app/layout/LoadingComponent";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchProductsAsync, productSelectorts } from "./catalogSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../app/router/configureStore";

export default function Catalog() {
  const products = useAppSelector(productSelectorts.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [dispatch, productsLoaded]);

  if (status.includes("pending"))
    return <LoadingComponent message="Loading products" />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
