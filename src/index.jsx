// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/main/Home';
import './utils/app';
import './styles/styles.css';
import './styles/responsive.css';

const root = createRoot(document.getElementById('root'));
root.render(<Home />);
