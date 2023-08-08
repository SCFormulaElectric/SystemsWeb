import React from 'react';

import '../Shared.css'

function AdminPage() {
  return (
    <div className="homepage">
      <header>
        <h1>Admin Page</h1>
      </header>
      <main>
        <p>This is such a great website</p>
        <p>Bo</p>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} nicky</p>
      </footer>
    </div>
  );
}

export default AdminPage;
