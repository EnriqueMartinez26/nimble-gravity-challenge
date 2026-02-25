import { useState } from "react";
import { applyToJob } from "../api";

function JobCard({ job, candidate }) {
    const [repoUrl, setRepoUrl] = useState("");
    const [status, setStatus] = useState("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async () => {
        if (!repoUrl.trim()) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            await applyToJob({
                uuid: candidate.uuid,
                jobId: job.id,
                candidateId: candidate.candidateId,
                applicationId: candidate.applicationId,
                repoUrl: repoUrl.trim(),
            });
            setStatus("success");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message);
        }
    };

    return (
        <div className="job-card">
            <h3>{job.title}</h3>
            <span className="job-id">ID: {job.id}</span>

            <div className="job-card-actions">
                <input
                    type="url"
                    placeholder="https://github.com/tu-usuario/tu-repo"
                    value={repoUrl}
                    onChange={(e) => setRepoUrl(e.target.value)}
                    disabled={status === "loading" || status === "success"}
                />
                <button
                    onClick={handleSubmit}
                    disabled={!repoUrl.trim() || status === "loading" || status === "success"}
                >
                    {status === "loading" ? "Enviando..." : status === "success" ? "Enviado ✓" : "Submit"}
                </button>
            </div>

            {status === "success" && (
                <p className="success-msg">¡Postulación enviada correctamente!</p>
            )}
            {status === "error" && (
                <p className="error-msg">{errorMsg}</p>
            )}
        </div>
    );
}

export default JobCard;
