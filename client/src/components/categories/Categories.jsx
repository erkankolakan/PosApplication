import { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add";
import Edit from "./Edit";
import "./style.css";

const Categories = ({ categories, setCategories, setFiltered, products }) => {
  const [isAddModalOpen, setIsisAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoryTitle, setCategoryTitle] = useState("Tümü");

  useEffect(() => {
    if (categoryTitle === "Tümü") {
      setFiltered(products);
    }else{
      setFiltered(products.filter((item) => item.category === categoryTitle))
    }
  }, [categoryTitle, setFiltered, products]);

  return (
    <ul className="flex gap-4 text-lg md:flex-col py-2 h-full">
      {categories.map((category) => (
        <li onClick={() => setCategoryTitle(category.title)} key={category._id} className={`category-item hover:opacity-70 ${category.title === categoryTitle && "!bg-tomato"}`}>
          {category.title}
        </li>
      ))}

      <li
        onClick={() => {
          setIsisAddModalOpen(true);
        }}
        className="category-item !bg-purple-500 hover:opacity-70"
      >
        <PlusOutlined className="md:text-2xl" />
      </li>

      <li
        onClick={() => {
          setIsEditModalOpen(true);
        }}
        className="category-item !bg-amber-500 hover:opacity-70"
      >
        <EditOutlined className="md:text-2xl" />
      </li>

      <Add
        isAddModalOpen={isAddModalOpen}
        setIsisAddModalOpen={setIsisAddModalOpen}
        setCategories={setCategories}
        categories={categories}
      />

      <Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        setCategories={setCategories}
        categories={categories}
      />
    </ul>
  );
};

export default Categories;
