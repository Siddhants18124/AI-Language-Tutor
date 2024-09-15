import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ModulesPage() {
  const [modules, setModules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all modules for the course
    const fetchModules = async () => {
      try {
        const response = await axios.get("/api/courses"); // Fetch all modules of the course
        setModules(response.data.modules);
      } catch (error) {
        console.error("Failed to fetch modules:", error);
      }
    };
    fetchModules();
  }, []);

  const handleModuleClick = (moduleId) => {
    navigate(`/module/${moduleId}`); // Redirect to the selected module details page
  };

  return (
    <div className="flex flex-wrap gap-4">
      {modules.map((module) => (
        <div 
          key={module._id} 
          className="p-4 border rounded shadow cursor-pointer"
          onClick={() => handleModuleClick(module._id)}
        >
          <h3 className="font-semibold">{module.moduleTitle}</h3>
        </div>
      ))}
    </div>
  );
}

export default ModulesPage;
