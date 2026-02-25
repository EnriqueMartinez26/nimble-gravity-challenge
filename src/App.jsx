import { useState } from "react";
import EmailForm from "./components/EmailForm";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [candidate, setCandidate] = useState(null);

  return (
    <div className="app">
      <header>
        <h1>Nimble Gravity — Postulaciones</h1>
      </header>

      <main>
        {candidate ? (
          <JobList candidate={candidate} />
        ) : (
          <EmailForm onCandidateFound={setCandidate} />
        )}
      </main>
    </div>
  );
}

export default App;
