import React, { useState } from "react";
import "./home.css";
import axios from "axios";

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData.name);
    try {
      await axios.post("http://localhost:3000/user", formData);
      setFormData({
        name: "",
        age: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Erro ao inserir usuário", error);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Cadastro de usuário</h1>
        <form onSubmit={handleSubmit}>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label>Idade:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label>Senha:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="cadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
