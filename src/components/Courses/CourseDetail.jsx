// CourseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <button>Reserve Now</button>
    </div>
  );
}

const courses = [
  { id: 1, title: 'React Fundamentals', description: 'Learn the basics of React' },
  { id: 2, title: 'JavaScript Essentials', description: 'Master JavaScript fundamentals' },
  { id: 3, title: 'UI/UX Design', description: 'Design beautiful user interfaces' },
];

export default CourseDetail;