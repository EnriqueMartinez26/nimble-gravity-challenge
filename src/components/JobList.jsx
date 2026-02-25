import { useEffect, useState } from "react";
import { getJobsList } from "../api";
import JobCard from "./JobCard";

function JobList({ candidate }) {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        getJobsList()
            .then((data) => {
                if (!cancelled) setJobs(data);
            })
            .catch((err) => {
                if (!cancelled) setError(err.message);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return <p className="loading-text">Cargando posiciones...</p>;
    }

    if (error) {
        return <p className="error-msg">No se pudieron cargar las posiciones: {error}</p>;
    }

    if (jobs.length === 0) {
        return <p>No hay posiciones disponibles en este momento.</p>;
    }

    return (
        <div className="job-list">
            <div className="candidate-info">
                <p>
                    Hola <strong>{candidate.firstName} {candidate.lastName}</strong> 👋
                </p>
            </div>

            <h2>Posiciones abiertas</h2>

            <div className="jobs-grid">
                {jobs.map((job) => (
                    <JobCard key={job.id} job={job} candidate={candidate} />
                ))}
            </div>
        </div>
    );
}

export default JobList;
