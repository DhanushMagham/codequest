const express = require('express');
const app = express();

// Sample data for courses
const courses = [
  { id: 1, name: 'Data Structures', type: 'theory' },
  { id: 2, name: 'Operating Systems', type: 'theory' },
  { id: 3, name: 'AI Lab', type: 'lab' },
  { id: 4, name: 'DBMS Lab', type: 'lab' },
];

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
