import { useState } from "react";
import { getCandidateByEmail } from "../api";

function EmailForm({ onCandidateFound }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const data = await getCandidateByEmail(email.trim());
            onCandidateFound(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="email-form-container">
            <h2>Bienvenido/a</h2>
            <p>Ingresá tu email para ver las posiciones disponibles.</p>

            <form onSubmit={handleSubmit} className="email-form">
                <input
                    type="email"
                    placeholder="tu-email@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    required
                />
                <button type="submit" disabled={loading || !email.trim()}>
                    {loading ? "Buscando..." : "Continuar"}
                </button>
            </form>

            {error && <p className="error-msg">{error}</p>}
        </div>
    );
}

export default EmailForm;
