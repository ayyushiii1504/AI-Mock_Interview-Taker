import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);


  useEffect(() => {
    try {
      console.log("Disabling scroll");
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
  
      return () => {
        console.log("Restoring scroll");
        document.body.style.overflow = originalStyle;
      };
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  }, []);
  
  


  const handleStart = () => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      alert("Please login first to start the interview.");
      navigate("/login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6" style={{ height: "100vh" }}>      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold text-blue-700">Ace Your Next Interview with AI!</h1>
        <p className="mt-4 text-lg text-gray-700">
          Get real-time feedback, practice industry-standard questions, and improve your interview skills with our AI-powered mock interview system.
        </p>

        {/* Call to Action */}
        <button
          onClick={handleStart}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Start Practicing
        </button>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">📜 Realistic Questions</h2>
          <p className="text-gray-600 mt-2">Practice with top interview questions tailored to your role.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">🤖 AI-Powered Feedback</h2>
          <p className="text-gray-600 mt-2">Get instant insights on your answers to improve performance.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">📊 Track Your Progress</h2>
          <p className="text-gray-600 mt-2">Monitor your improvement with detailed analytics.</p>
        </div>
      </div>

      {/* Motivation Section */}
      <div className="mt-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800">🚀 Get Ready to Land Your Dream Job!</h2>
        <p className="text-gray-600 mt-3">
          Whether you're preparing for technical interviews or behavioral questions, our AI-driven platform is here to help you succeed.
        </p>
      </div>
    </div>
  );
};

export default Home;
