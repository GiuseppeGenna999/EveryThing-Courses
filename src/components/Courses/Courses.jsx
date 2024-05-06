// Courses.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // fetch courses from API or database
    const coursesData = [
      { id: 1, title: 'React Fundamentals', description: 'Learn the basics of React' },
      { id: 2, title: 'JavaScript Essentials', description: 'Master JavaScript fundamentals' },
      { id: 3, title: 'UI/UX Design', description: 'Design beautiful user interfaces' },
    ];
    setCourses(coursesData);
  }, []);

  return (
    <div className="courses">
      <h1>Courses</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
