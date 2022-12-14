import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    name === "age" || name === "durationInDays" ?
    setForm({ ...form, [name]: parseInt(value) }) 
    : 
    setForm({ ...form, [name]: value });
  }

  return [form, handleChange];
}