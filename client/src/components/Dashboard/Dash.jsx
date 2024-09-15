import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ModuleService from '../../services/openai'; // Update the path if necessary

const Dash = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const response = await ModuleService.getAllModules();
        setCourses(response.modules); // Adjust based on the API response format
      } catch (err) {
        setError('Failed to fetch courses');
        console.error('Error fetching courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => {
            const progress = course.coursesProgress.find(cp => cp.course.toString() === course._id.toString())?.progress || 0;
            return (
              <div key={course._id} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-2">{course.title}</h2>
                <div className="mb-2">
                  <progress value={progress} max="100" className="w-full" />
                  <span className="text-sm text-gray-600">{progress}% completed</span>
                </div>
                <Link to={`/modules/${course._id}`} className="text-blue-500 hover:underline">Continue Learning</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No courses available</div>
      )}
    </div>
  );
};

export default Dash;
