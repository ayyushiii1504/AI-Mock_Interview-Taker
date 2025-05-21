import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [field, setField] = useState("Software Engineering");

  return (
    <div className="py-20 flex justify-center items-center flex-col">
      <h2 className="text-2xl font-bold">Welcome to Your AI Mock Interviews</h2>

      <div className="mt-7 mb-7">
        <label className="mr-2 font-medium">Select Field:</label>
        <select
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Software Engineering">Software Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
        </select>
      </div>

      <button
        className="btn btn-primary mt-4 bg-blue-600 text-white px-6 py-3 rounded"
        onClick={() => navigate("/interview", { state: { field } })}
      >
        Start Interview
      </button>
    </div>
  );
};

export default Dashboard;

