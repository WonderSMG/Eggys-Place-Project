import React from "react";

const ProductSession = () => {
  return (
    <>
      <main className="wrapper flex justify-between items-center font-redHat">
        <section className="w-full">
          <div className="carousel bg-[#252422] w-full md:h-[176px] rounded-[101px]  justify-between py-[12px] px-[60px space-x-12">
            <div className="product-session">
              <img className="h-[35px] md:h-[115px] "
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/burger_xepnzf.svg"
                alt="Burger"
              />
              <p>Burger</p>
            </div>
            <div className="product-session">
              <img className="md:h-[115px] h-[35px]"
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/combos_we0lfx.svg"
                alt="Combos"
              />
              <p>Combos</p>
            </div>
            <div className="product-session">
              <img className="md:h-[115px] h-[35px]"
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/drinks_wco1co.svg"
                alt="Drinks"
              />
              <p>Drinks</p>
            </div>
            <div className="product-session">
              <img className="md:h-[115px] h-[35px]"
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chickens_pqmbu7.svg"
                alt="Chicken"
              />
              <p>Chicken</p>
            </div>
            <div className="product-session">
              <img className="md:h-[115px] h-[35px]"
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223929/chips_yn9jhf.svg"
                alt="Chips"
              />
              <p>Chips</p>
            </div>
            <div className="product-session">
              <img className="md:h-[115px] h-[35px]"
                src="https://res.cloudinary.com/diww44oar/image/upload/v1741223928/salads_upryv7.svg"
                alt="Salad"
              />
              <p>Salad</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductSession;
