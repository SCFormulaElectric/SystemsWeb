import React from 'react';

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>hi tyler! This is the home page</h1>
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

export default HomePage;
