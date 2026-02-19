import { useState } from "react";

function AIChat() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = () => {

    // temporary response
    setResponse("This is AI response (backend will connect later)");

  };

  return (
    <div>

      <h2>AI Twin Teacher</h2>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask question"
      />

      <button onClick={askAI}>
        Ask
      </button>

      <p>{response}</p>

    </div>
  );
}

export default AIChat;
