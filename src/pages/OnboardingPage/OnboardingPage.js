import React from 'react';

function OnboardingPage() {
  return (
    <div className="OnboardingPage">
      <header>
        <h1>This is the onboarding page</h1>
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

export default OnboardingPage;
