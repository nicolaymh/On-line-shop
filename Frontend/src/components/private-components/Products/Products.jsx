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
            <div className={style.gridContainer}>
               {filterProducts().map((p) => {
                  return (
                     <div key={p._id} className={style.cardContainer}>
                        <figure className={style.figure}>
                           <img src={p.image.url} alt={p.name} />
                        </figure>

                        <div className={style.priceContainer}>
                           <p className={style.price}>
                              {
                                 p.price
                                    .toLocaleString("es-CO", {
                                       style: "currency",
                                       currency: "COP",
                                    })
                                    .split(",")[0]
                              }
                           </p>
                        </div>

                        <div className={style.descriptionContainer}>
                           <p>{p.description}</p>
                        </div>

                        <div className={style.buttonContainer}>
                           <button>ADD TO CART</button>
                        </div>
                     </div>
                  );
               })}
            </div>

            <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
         </section>
      </main>
   );
};

export default Products;
