// Assets.
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/products/Products.module.scss";

// Context.
import useProducts from "../../../Hooks/useProducts";
import useCategory from "../../../Hooks/useCategory";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

// Components.
import GenericComponents from "../../generic-components";
import FilterSelectProducts from "./FilterSelectProducts";
import ProductCard from "./ProductCard";

const Products = () => {
   const { ProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   const {
      filterProducts,
      nextPage,
      prevPage,
      onSearchChange,
      subcategoriesList,
      handleSelectCategory,
      handleSelectSubcategory,
   } = useProductsFiltering(ProductsInfo, categoryinfoAll);

   console.log(filterProducts());

   return (
      <main className={style.mainContainer}>
         <div className={style.titleContainer}>
            <figure>
               <img src={img1} alt="img1-products" />
            </figure>
            <div>
               <h3>Products</h3>
            </div>
            <figure className={style.figure}>
               <img src={img2} alt="img2-products" />
            </figure>
         </div>

         <section className={style.filterSection}>
            <FilterSelectProducts
               categoryinfoAll={categoryinfoAll}
               subcategoriesList={subcategoriesList}
               handleSelectCategory={handleSelectCategory}
               handleSelectSubcategory={handleSelectSubcategory}
            />

            <div className={style.searchContainer}>
               <GenericComponents.SearchProduct onSearchChange={onSearchChange} />
            </div>
         </section>

         <section className={style.productsSection}>
            <ProductCard filterProducts={filterProducts} />

            <div className={style.buttonsContainer}>
               <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
            </div>
         </section>
      </main>
   );
};

export default Products;
