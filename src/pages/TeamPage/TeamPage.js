import React from 'react';

function TeamPage() {
  return (
    <div className="TeamPage">
      <header>
        <h1>This is the Team page</h1>
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

export default TeamPage;
