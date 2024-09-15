import React, { useState, useEffect } from 'react';
import CoursePage from './CoursePage'; // Import the CoursePage component

const CourseContainer = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the course data from your backend API
    const fetchCourseData = async () => {
      try {
        const response = await fetch('/api/courses'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const data = await response.json();
        setCourse(data.course); // Assuming the API returns { course: { title, language, modules } }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {course ? <CoursePage course={course} /> : <div>No course data available</div>}
    </div>
  );
};

export default CourseContainer;
