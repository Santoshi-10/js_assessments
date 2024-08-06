import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setErrors('Name is required');
    } else {
      setErrors('');
      // Handle form submission logic here
      console.log('Form submitted with name:', name);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      {errors && <p>{errors}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
