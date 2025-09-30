import { useState } from "react";
 import "./NechieForm.css"; // import the stylesheet

export default function NechieForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    nickname: "",
    birthday: "",
    favoriteFood: "",
    favoriteSong: "",
    hobbies: "",
    bestMemory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="nechie-form">
        <h2 className="form-title">Nechie Info Form</h2>

        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Nickname:
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
          />
        </label>

        <label>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
          />
        </label>

        <label>
          Favorite Food:
          <input
            type="text"
            name="favoriteFood"
            value={formData.favoriteFood}
            onChange={handleChange}
          />
        </label>

        <label>
          Go-To Song / Artist:
          <input
            type="text"
            name="favoriteSong"
            value={formData.favoriteSong}
            onChange={handleChange}
          />
        </label>

        <label>
          Hobbies:
          <textarea
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          />
        </label>

        <label>
          Best Memory Together:
          <textarea
            name="bestMemory"
            value={formData.bestMemory}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}
