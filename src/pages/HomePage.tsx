import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchItems } from "../api";

const HomePage: React.FC = () => {
  const [featuredItems, setFeaturedItems] = useState<any[]>([]);

  // Fetch featured items from the catalog
  useEffect(() => {
    fetchItems()
      .then((response) => {
        // Assuming featured items are the first few items from the API
        setFeaturedItems(response.data.slice(0, 4));
      })
      .catch((error) => console.error("Error fetching featured items:", error));
  }, []);

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero bg-gray-100 p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Elite Furniture</h1>
        <p className="text-lg text-gray-600">Subtext</p>
        <Link
          to="/catalog"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
        >
          Browse Catalog
        </Link>
      </header>

      {/* Featured Items */}
      <section className="featured-items container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <div key={item._id} className="item bg-white shadow rounded p-4">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <p className="text-blue-500 font-bold mt-2">${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-200 py-4 text-center text-gray-600">
        <p>&copy; 2024 Elite Furniture. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
