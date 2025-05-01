import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password tidak cocok!');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          <FaUser className="me-2" /> DAFTAR IFLIX
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Nama Lengkap</label>
            <div className="input-field">
              <FaUser className="input-icon" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <div className="input-field">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contoh@email.com"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-field">
              <FaLock className="input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Konfirmasi Password</label>
            <div className="input-field">
              <FaLock className="input-icon" />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Ulangi password"
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-button">
            DAFTAR SEKARANG
          </button>
        </form>

        <p className="auth-footer">
          Sudah punya akun? <a href="/login">Login disini</a>
        </p>
      </div>
    </div>
  );
}

export default Register;