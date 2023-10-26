import React from 'react';

const Card = ({ category }) => {
    return (
        <div>
            <div className="card relative grid h-[23rem] w-[23rem] md:w-[21rem] lg:w-[24rem] my-5 flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                <div className="image-container relative overflow-hidden">
                    <img className="mx-auto card-image w-96" src={`${category.image}`} alt="" />
                </div>
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-2 py-14 px-6 md:px-12">
                    <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        {category.name}
                    </h2>
                </div>
            </div>
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
        </div>
    );
};

export default Card;
