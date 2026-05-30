
# AI Twin Teacher

AI Twin Teacher is an emotion-aware AI learning platform designed to support children through personalized learning. The system uses AI chatbot support, face emotion detection, adaptive recommendations, guardian approval, student registration, quiz support, and parent dashboard insights.

NOVA acts as the AI Twin Teacher. It provides child-friendly explanations, emotional support, hints, quizzes, and learning recommendations based on the student’s learning condition.

---

## Project Overview

The main goal of this project is to create a safe and adaptive AI learning environment for students. The system identifies the student’s emotional state internally and uses it to improve the learning experience without showing raw emotion percentages to the student.

Key idea:

```text
Student Interaction
        ↓
Face Emotion Detection
        ↓
Adaptive Recommendation Model
        ↓
NOVA AI Teacher Response
        ↓
Personalized Learning Support
````

---

## Main Features

* Student registration with system-generated Student ID and PIN
* Guardian approval before student login
* Secure student login using Student ID and PIN
* Forgot PIN recovery using OTP verification
* AI learning room with NOVA chatbot
* Face emotion detection using ML service
* Raw emotion values hidden from student UI
* Adaptive recommendation engine using trained model
* Quiz, hint, visual explanation, and break support
* Parent dashboard with simplified learning insights
* Child-safe and supportive AI teacher responses

---

## Technology Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Socket.IO
* REST APIs

### ML Service

* Python
* FastAPI
* OpenCV
* FER / TensorFlow
* Scikit-learn
* Joblib
* RandomForest Classifier

---

## Project Structure

```text
ai-twin-teacher/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── seed.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── ml-service/
│   ├── api/
│   │   └── app.py
│   ├── face_emotion/
│   │   ├── predict.py
│   │   └── preprocess.py
│   ├── voice_emotion/
│   │   └── predict.py
│   ├── recommendation_engine/
│   │   ├── data/
│   │   ├── model/
│   │   ├── action_predictor.py
│   │   ├── decision_engine.py
│   │   ├── generate_action_dataset.py
│   │   └── train_action_model.py
│   ├── chatbot.py
│   └── requirements.txt
│
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-twin-teacher.git
cd ai-twin-teacher
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
NODE_ENV=development
PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/ai_twin_teacher

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

ML_SERVICE_URL=http://localhost:8000
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## ML Service Setup

```bash
cd ml-service
python -m venv venv
```

Activate virtual environment on Windows:

```bash
.\venv\Scripts\Activate.ps1
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run ML service:

```bash
python -m uvicorn api.app:app --host 0.0.0.0 --port 8000 --reload
```

ML service runs on:

```text
http://localhost:8000
```

---

## Adaptive Recommendation Model

The project includes a trained recommendation model that predicts the best teaching action based on:

* Emotion scores
* Engagement score
* Session time
* Quiz accuracy
* Wrong answers
* Lesson step
* Face confidence

Example actions:

```text
CONTINUE_LESSON
START_QUIZ_GAME
SUPPORT_CHAT
SIMPLIFY_EXPLANATION
CALM_ACTIVITY
TAKE_SHORT_BREAK
PLAY_LEARNING_GAME
```

Train model:

```bash
cd ml-service
python recommendation_engine/generate_action_dataset.py
python recommendation_engine/train_action_model.py
```

Model output:

```text
ml-service/recommendation_engine/model/action_model.pkl
```

---

## Important API Endpoints

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/reset/send-otp
POST /api/auth/verify-otp
POST /api/auth/reset-pin
```

### AI and Emotion

```text
POST /api/ai/ask
POST /api/ai/emotion
```

### ML Service

```text
POST /face/predict
POST /voice/predict
POST /recommend
POST /chat
```

---

## Student Safety and Guardian Approval

When a student registers, the account status is set to:

```text
PENDING
```

The student cannot log in until the guardian approves the account. After approval, the status changes to:

```text
ACTIVE
```

This ensures child safety and parental consent before allowing access to the AI learning environment.

---

## Emotion Privacy

The system detects emotion internally but does not show raw emotion percentages to the student.

Example hidden internal values:

```json
{
  "confused": 80,
  "sad": 10,
  "happy": 5
}
```

Student sees only a supportive NOVA message:

```text
That is okay. Let me explain this in a simpler way.
```

---

## Parent Dashboard

The parent dashboard shows simplified learning insights such as:

* Average quiz score
* Learning progress
* Suggested practice areas
* Supportive learning recommendations

Raw emotion prediction percentages are not shown to parents or students.

---

## How to Run Full Project

Run three terminals:

### Terminal 1 – ML Service

```bash
cd ml-service
.\venv\Scripts\Activate.ps1
python -m uvicorn api.app:app --host 0.0.0.0 --port 8000 --reload
```

### Terminal 2 – Backend

```bash
cd backend
npm run dev
```

### Terminal 3 – Frontend

```bash
cd frontend
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Testing

Main test areas:

* Student login
* New student registration
* Guardian approval
* Forgot PIN recovery
* Emotion detection
* Hidden emotion response
* Adaptive recommendation engine
* NOVA chatbot response
* Parent dashboard summary

---

## Security Notes

Do not upload `.env` files to GitHub.

Add this to `.gitignore`:

```gitignore
.env
node_modules/
venv/
__pycache__/
*.pyc
ml-service/recommendation_engine/model/*.pkl
```

If model files are large, use Git LFS or keep them outside GitHub.

---

## Future Improvements

* Improve face emotion model accuracy with a custom trained dataset
* Add voice emotion analysis using real-time audio
* Add more subjects and lessons
* Add teacher dashboard
* Improve parent analytics
* Add multilingual support for Sinhala, Tamil, and English
* Deploy backend, frontend, and ML service to cloud platforms

---

## Author
Developed by Piumini Rashmika
Project: AI Twin Teacher 
