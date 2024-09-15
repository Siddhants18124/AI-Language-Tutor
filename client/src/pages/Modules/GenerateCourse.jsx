import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import ModuleService from '../../services/openai';

function GenerateCourse() {
  const [language, setLanguage] = useState('');
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get('language-jwt-token');
    if (!token) {
      console.error('No authentication token found.');
      return;
    }

    try {
      const response = await ModuleService.generateCourse({ language });
      navigate(`/courses/${response.course._id}`);
    } catch (error) {
      console.error('Error generating course:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        Next Level AI Tutoring for Life-Long Learners
      </h1>
      <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
        Create a custom learning pathway to help you achieve more in school, work, and life.
      </p>
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          placeholder="Choose any topic..."
          className="rounded-l-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Generate Course
        </button>
      </form>
    </div>
  );
}

export default GenerateCourse;
