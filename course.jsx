import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseSelection = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState({
    theory: [],
    lab: [],
  });
  const [teachers, setTeachers] = useState({});
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Fetch available courses
    axios.get('/api/courses').then((response) => {
      setCourses(response.data);
    });
  }, []);

  const handleCourseSelect = (course, type) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [type]: [...prev[type], course],
    }));
  };

  return (
    <div>
      <h1>Course Selection</h1>
      <h2>Theory Courses</h2>
      <div>
        {courses
          .filter((course) => course.type === 'theory')
          .map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <button onClick={() => handleCourseSelect(course, 'theory')}>
                Select
              </button>
            </div>
          ))}
      </div>

      <h2>Lab Courses</h2>
      <div>
        {courses
          .filter((course) => course.type === 'lab')
          .map((course) => (
            <div key={course.id}>
              <h3>{course.name}</h3>
              <button onClick={() => handleCourseSelect(course, 'lab')}>
                Select
              </button>
            </div>
          ))}
      </div>

      <h2>Selected Courses</h2>
      <div>
        <h3>Theory: {selectedCourses.theory.map((c) => c.name).join(', ')}</h3>
        <h3>Lab: {selectedCourses.lab.map((c) => c.name).join(', ')}</h3>
      </div>
    </div>
  );
};

export default CourseSelection;
