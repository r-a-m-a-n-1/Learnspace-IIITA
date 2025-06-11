// src/pages/ApproveAdmin.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import api from '../api/api';

export default function ApproveAdmin() {
  const [status, setStatus] = useState('Verifying…');
  const token = new URLSearchParams(useLocation().search).get('token');

  useEffect(() => {
    if (!token) {
      setStatus('Invalid approval link.');
      return;
    }

    api.get(`/approve-admin?token=${token}`)
      .then(() => setStatus('✓ Admin approved! Return to dashboard.'))
      .catch(() => setStatus('Approval failed or expired.'));
  }, [token]);

  const isSuccess = status.startsWith('✓');

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h1 className="text-2xl mb-4">{status}</h1>
      {isSuccess && (
        <Link to="/admin" className="text-green-500 hover:underline">
          ← Back to Admin Dashboard
        </Link>
      )}
    </div>
  );
}
