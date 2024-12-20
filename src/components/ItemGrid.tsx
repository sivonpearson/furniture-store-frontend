import React from "react";

interface Item {
  name: string;
  price: number;
  imageUrl: string;
}

type Props = {
  items: Item[];
};

const ItemGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white shadow-md items-center rounded-lg border border-gray-200 p-4 flex flex-col"
          >
            <img
              className="object-cover w-full h-48"
              src={item.imageUrl}
              alt={item.name}
            />
            <h2 className="text-lg font-semibold mt-4 text-center">
              {item.name}
            </h2>
            <p className="text-blue-500 font-bold mt-2 text-center">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemGrid;
