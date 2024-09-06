"use client"

import React, { useState } from 'react';

// Individual components to render
const Message = () => <div>This is the Message component.</div>;
const Items = () => <div>This is the Items component.</div>;
const Quest = () => <div>This is the Quest component.</div>;
const Ranking = () => <div>This is the Ranking component.</div>;
const Invite = () => <div>This is the Invite component.</div>;

// Main App component
const App = () => {
  // State to keep track of which component is visible
  const [activeComponent, setActiveComponent] = useState('message'); // Default is 'message'

  // Function to render the current active component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'message':
        return <Message />;
      case 'items':
        return <Items />;
      case 'quest':
        return <Quest />;
      case 'ranking':
        return <Ranking />;
      case 'invite':
        return <Invite />;
      default:
        return <Message />; // Default fallback
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <button style={styles.button} onClick={() => setActiveComponent('message')}>Message</button>
        <button style={styles.button} onClick={() => setActiveComponent('items')}>Items</button>
        <button style={styles.button} onClick={() => setActiveComponent('quest')}>Quest</button>
        <button style={styles.button} onClick={() => setActiveComponent('ranking')}>Ranking</button>
        <button style={styles.button} onClick={() => setActiveComponent('invite')}>Invite</button>
      </nav>

      {/* Render the active component */}
      <div style={styles.content}>
        {renderComponent()}
      </div>
    </div>
  );
};

// Simple styles for demonstration purposes
const styles = {
  navbar: {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
  content: {
    padding: '20px',
  },
};

export default App;
