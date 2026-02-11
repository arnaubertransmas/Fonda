"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { validateUser } from "@/services/blogService";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await validateUser(email, password);
      
      if (result.success) {
        console.log('Login exitós:', result.user);
        router.push("/portal_wikilok");
      } else {
        setError(result.error || "Credencials Incorrectes");
        setLoading(false);
      }
    } catch (err) {
      console.error('Error en login:', err);
      setError("Error de connexió. Torna-ho a intentar.");
      setLoading(false);
    }
  };

  return (
    <>
    <Header />
    <div className="min-h-screen flex items-start justify-center pt-20" style={{ backgroundColor: '#f5f1e8' }}>
      <div className="w-full max-w-md rounded-2xl shadow-2xl" style={{ 
        backgroundColor: '#ffffff',
        border: '1px solid #e5e0d5'
      }}>
        <div className="p-8">
          {/* Títol */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-3" style={{
              backgroundColor: '#f5f1e8'
            }}>
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: '#471D19' }}>
              Admin Login
            </h2>
          </div>

          {/* Error Alert */}
          {error && (
            <div className="mb-6 p-3 rounded-lg flex items-center gap-3" style={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca'
            }}>
              <span className="text-lg">⚠️</span>
              <p className="text-sm font-medium" style={{ color: '#991b1b' }}>
                {error}
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: '#fafaf9',
                  borderColor: '#d6cfc0',
                  color: '#2c1810'
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: '#fafaf9',
                  borderColor: '#d6cfc0',
                  color: '#2c1810'
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                backgroundColor: loading ? '#8b7355' : '#471D19',
                color: '#ffffff',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
              disabled={loading}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = '#2c1810';
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = '#471D19';
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Validant...</span>
                </>
              ) : (
                <span>Entrar</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}