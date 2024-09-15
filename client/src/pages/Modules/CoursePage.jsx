import React from 'react';

const CoursePage = ({ course }) => {
  return (
    <div className="container mx-auto p-4">
      {/* Course title */}
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <p className="text-xl font-semibold mb-8">Language: {course.language}</p>

      {/* Modules and Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column for module titles and sections */}
        <div className="space-y-4">
          {course.modules.map((module) => (
            <div key={module._id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{module.moduleTitle}</h2>
              <ul>
                {module.sections.map((section) => (
                  <li key={section._id} className="text-gray-700">
                    {section.sectionTitle}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right column for section content */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Section Content</h2>
          <p className="text-gray-700">
            {/* Add content for the currently selected section */}
            Please select a section to view the details.
          </p>
          {/* Button to mark section as completed */}
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Mark Section as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
