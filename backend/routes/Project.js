const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.post('/create', async (req, res) => {
  try {
    const { title, description, deadline, createdBy } = req.body;

    const project = new Project({
      title,
      description,
      deadline,
      createdBy
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Project creation failed', error: err.message });
  }
});


router.get('/all', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

module.exports = router;
