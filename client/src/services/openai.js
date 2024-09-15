import axiosInstance from './axiosInstance';

const BASE_URL = 'http://localhost:5001/api/courses';

const ModuleService = {
    getModule: async (moduleId) => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/${moduleId}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // services/openai.js
    getModuleDetails : async (moduleId) => {
        const response = await axiosInstance.get(`${BASE_URL}/${moduleId}`);
        console.log("_____________________")
        console.log(response);
        console.log("_____________________")
        if (!response.statusText==200) {
            throw new Error('Network response was not ok');
        }
        return response.data;
    },
    generateCourse: async (payload) => {
        try {
            const response = await axiosInstance.post(`${BASE_URL}/generate`, payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getAllModules: async () => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/modules`);
            return response.data; // Assuming response is { modules: [...] }
        } catch (error) {
            throw error;
        }
    },

    getCourseById: async (courseId) => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/${courseId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching course:', error);
            throw error;
        }
    },

};

export default ModuleService;
