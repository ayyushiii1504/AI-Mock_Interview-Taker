import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Feedback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const feedback = location.state?.feedback || "No feedback available.";

  return (
    <div className="container mx-auto max-w-3xl p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Mock Interview Feedback
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">
          Overall Performance Summary
        </h3>

        <div className="max-w-full text-gray-800 [&_h1]:mt-6 [&_h2]:mt-5 [&_h3]:mt-4 [&_h4]:mt-3 [&_p]:mt-2">
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-semibold" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-semibold" {...props} />,
              p: ({node, ...props}) => <p className="text-base leading-relaxed" {...props} />,
            }}
          >
            {feedback}
          </ReactMarkdown>
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Feedback;
