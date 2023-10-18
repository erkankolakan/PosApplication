import { useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import Add from "./Add"
import Edit from "./Edit";
import "./style.css";





const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsisAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 text-lg md:flex-col py-2">
      {categories.map((category) => (
        <li key={category._id} className="category-item hover:opacity-70">
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
      />

    </ul>
  );
};

export default Categories;
