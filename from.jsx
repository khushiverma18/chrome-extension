import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', age: '', file: null });
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.file) {
      setError('All fields are required!');
      return;
    }
    setError('');
    alert('Form submitted successfully!');
  };
  return (
    <div className="form-container">
      <h2>Healthcare Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            required
          />
        </label>
        <label>
          File Upload:
          <input
            type="file"
            onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Form;
