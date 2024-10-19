const teachers = [
    {
      id: 1,
      name: 'Dr. John Doe',
      academicBackground: 'PhD in Computer Science',
      researchProjects: ['AI Research', 'Data Mining'],
      patents: ['AI-based pattern recognition'],
      rating: 4.5,
    },
    // More teachers...
  ];
  
  app.get('/api/teachers/:id', (req, res) => {
    const teacher = teachers.find((t) => t.id === parseInt(req.params.id));
    if (!teacher) return res.status(404).send('Teacher not found');
    res.json(teacher);
  });
  