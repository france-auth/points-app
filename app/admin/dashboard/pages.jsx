// pages/login.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple front-end validation
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Simulate login (backend logic will go here)
    if (email === 'admin@example.com' && password === 'password') {
      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#C4DACC]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl mb-6 text-[#004a50]">Login</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded text-[#004a50]"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded text-[#004a50]"
        />
        <button type="submit" className="w-full bg-[#004a50] text-white py-2 rounded hover:bg-[#367378]">
          Login
        </button>
      </form>
    </div>
  );
}
