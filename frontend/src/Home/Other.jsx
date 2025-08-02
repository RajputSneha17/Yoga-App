import React from 'react';
import { Link } from 'react-router-dom';

const Other = () => {
  return (
    <div className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">You can also create sessions</h2>
        <p className="lead mb-4">Create your own yoga sessions and join us. It's easy and open for everyone.</p>
        
        <Link to="/createsession" className="btn btn-success px-4 py-2">Start a Session</Link>

      </div>
    </div>
  );
};

export default Other;
