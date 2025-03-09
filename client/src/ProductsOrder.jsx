import React from "react";
import { burgers } from "./product";

const ProductsOrder = () => {
  return (
    <>
      <main className="wrapper justify-between items-center">
        <section className="w-full">
        <div className=" grid md:grid-cols-3 w-full gap-y-[24px]">
          {burgers.map((burger) => {
            return (
              <div className="bg-[#252422] md:w-[377.3px] w-[280px]">
                <figure className="p-[14px] ">
                  <img
                    src={burger.image}
                    alt={burger.title}
                    className="rounded-xl"
                  />
                </figure>
                <div className="ml-3 leading-[100%]">
                  <div className="flex justify-between h-[36px] md:w-[349.33px] w-[255px]">
                    <h1>{burger.title}</h1>
                    <p className="border-[#B67B0F]">⭐️{burger.rating}</p>
                  </div>
                  <div className="flex justify-between h-[41px] md:w-[349.33px] w-[255px] items-center">
                    <h1 className="text-[#B67B0F] text-[31px] font-bold pb-4">&#8358;{burger.price}</h1>
                    <p>{burger.duration}</p>
                  </div>
                  <div className="">
                    <button className="bg-[#B67B0F] h-[56px] md:w-[349.33px] w-[255px] rounded-[31px] items-center">Add to cart</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </section>
      </main>
    </>
  );
};

export default ProductsOrder;
