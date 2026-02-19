import { useNavigate } from "react-router-dom";

function StudentDashboard() {

  const navigate = useNavigate();

  return (
    <div>

      <h1>Student Dashboard</h1>

      <button onClick={() => navigate("/chat")}>
        Ask AI Teacher
      </button>

    </div>
  );
}

export default StudentDashboard;
