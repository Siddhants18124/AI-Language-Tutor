import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ModuleService from '../../services/openai';

const ModuleDetailsPage = () => {
  const { moduleId } = useParams(); // Get moduleId from URL
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModuleDetails = async () => {
      setLoading(true);
      try {
        console.log("_____________________")
        console.log(moduleId);
        console.log("_____________________")
        const response = await ModuleService.getModuleDetails(moduleId);
        if (response.module) {
          setModules(response.module);
        }
      } catch (err) {
        setError('Failed to fetch module details');
        console.error('Error fetching module details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchModuleDetails();
  }, [moduleId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      {modules.length > 0 ? (
        modules.map((module) => (
          <div key={module._id} className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{module.moduleTitle}</h1>
            <div className="space-y-4">
              {module.sections.map((section) => (
                <div key={section._id} className="bg-gray-100 p-4 rounded shadow">
                  <h2 className="text-xl font-semibold">{section.sectionTitle}</h2>
                  <p className="text-gray-700">{section.body}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Mark as Completed
            </button>
          </div>
        ))
      ) : (
        <div>No modules available</div>
      )}
    </div>
  );
};

export default ModuleDetailsPage;
