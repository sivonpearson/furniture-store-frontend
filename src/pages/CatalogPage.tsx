import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import ItemGrid from "../components/ItemGrid";

const CatalogPage: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetchItems()
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching items:", error));
  }, []);

  return (
    <div className="catalog">
      <h1>Furniture Catalog</h1>
      <ItemGrid items={items} />
    </div>
  );
};

export default CatalogPage;
