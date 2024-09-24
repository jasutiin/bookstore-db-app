import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Add = () => {
  const [book, setBook] = useState({
    title: '',
    description: '',
    price: '',
    cover: '',
  });

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/books', book);
      navigate('/');
    } catch (err) {
      console.log('hey');
    }
  };

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="description"
      />
      <input
        type="text"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="cover"
      />
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
