import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
