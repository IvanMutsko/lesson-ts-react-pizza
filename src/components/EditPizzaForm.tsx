import React, { FC, ChangeEvent, FormEvent, useState } from "react";

import Pizza from "../models/Pizza";

import "./styles.css";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        name="title"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        type="text"
        name="img"
        placeholder="Image"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Accept</button>
    </form>
  );
};

export default EditPizzaForm;
