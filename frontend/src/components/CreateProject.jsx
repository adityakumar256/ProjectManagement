import React, { useState } from 'react';
import axios from 'axios';

function CreateProject() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    createdBy: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5050/api/projects/create', formData);
      alert('Project created successfully!');
      // Clear form
      setFormData({
        title: '',
        description: '',
        deadline: '',
        createdBy: ''
      });
    } catch (error) {
      console.error(error);
      alert('Failed to create project');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Deadline</label>
          <input
            type="date"
            name="deadline"
            className="form-control"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Created By</label>
          <input
            type="text"
            name="createdBy"
            className="form-control"
            value={formData.createdBy}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default CreateProject;
