import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './practice/components/test.jsx';
import Test1 from "./practice/components/test1";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Test />
        <Test1 />
    </React.StrictMode>

);
