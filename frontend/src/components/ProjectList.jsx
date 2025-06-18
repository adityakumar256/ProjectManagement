import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/projects/all');
        setProjects(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container mt-4">
      <h3>Project List</h3>
     {projects.map((proj) => (
  <div key={proj._id} className="card mb-2">
    <div className="card-body">
      <h5>{proj.title}</h5>
      <p>{proj.description}</p>
      <p><strong>Deadline:</strong> {new Date(proj.deadline).toISOString().split('T')[0]}</p>
      <p><strong>Created By:</strong> {proj.createdBy}</p>
    </div>
  </div>
))}

    </div>
  );
}

export default ProjectList;
