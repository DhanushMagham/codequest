import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeacherProfile = ({ teacherId }) => {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    // Fetch teacher details based on ID
    axios.get(`/api/teachers/${teacherId}`).then((response) => {
      setTeacher(response.data);
    });
  }, [teacherId]);

  if (!teacher) return <div>Loading...</div>;

  return (
    <div>
      <h1>{teacher.name}</h1>
      <p>Academic Background: {teacher.academicBackground}</p>
      <p>Research Projects: {teacher.researchProjects.join(', ')}</p>
      <p>Patents: {teacher.patents.join(', ')}</p>
      <p>Rating: {teacher.rating}</p>
    </div>
  );
};

export default TeacherProfile;
