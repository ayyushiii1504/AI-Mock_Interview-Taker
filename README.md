# 🤖 AI Mock Interview Taker

A full-stack MERN (MongoDB, Express, React, Node.js) web application that simulates technical mock interviews using **Google Gemini 1.5 Pro**. It allows users to practice real-time domain-specific questions, receive AI-generated feedback, and track their progress.


## 🌟 Features


- 🧠 **AI-Powered Questions**: Generates interview questions tailored to the selected domain.
- ✍️ **Answer Submission**: Users type answers in real-time.
- ✅ **Feedback Generator**: AI reviews the answer and gives constructive feedback.
- 📊 **User Dashboard**: View past interview results and performance insights.
- 🔐 **Authentication**: Secure login & signup functionality.
- 💾 **MongoDB Integration**: Stores users, questions, and feedback.


## 🔧 Tech Stack


- **Frontend**: React.js, React Router, CSS Modules / Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **AI Model**: Google Gemini 1.5 Pro (via API)
- **Authentication**: JWT (JSON Web Tokens)


## 🚀 Getting Started


### 1. Clone the Repository

```bash
git clone https://github.com/ayyushiii1504/AI-Mock_Interview-Taker.git
cd AI-Mock_Interview-Taker
```

### 2. Install Dependencies

For Frontend:
```bash
cd frontend/
npm install
```
For Backend:
```bash
cd backend/
npm install
```

### 3. Configure Environment Variables

Create a .env file in the server/ directory with the following:

```bash
PORT=18000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

### 4. Run the App

Start Backend:
```bash
npm run dev
```

Start Frontend:
```bash
cd frontend/
npm run dev
```
##  🙋‍♀️ Author


Ayushi Singh
GitHub: @ayyushiii1504





