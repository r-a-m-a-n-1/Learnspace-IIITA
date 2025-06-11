// src/pages/ApproveAdmin.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../api/api';

export default function ApproveAdmin() {
  const [status, setStatus] = useState('Verifying…');
  const token = new URLSearchParams(useLocation().search).get('token');

  useEffect(() => {
    if (!token) return setStatus('Invalid link');
    api.get(`/approve-admin?token=${token}`)
      .then(() => setStatus('✓ Admin approved! You can now log in.'))
      .catch(() => setStatus('Approval failed or expired.'));
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-2xl mb-4">{status}</h1>
      {status.startsWith('✓') && (
        <Link to="/admin/login" className="text-green-500 hover:underline">
          Go to Login
        </Link>
      )}
    </div>
  );
}
