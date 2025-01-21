import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './practice/components/test.jsx';
import Test1 from "./practice/components/test1.jsx";
import Test2 from "./practice/components/test2.jsx";
import Basic from "./practice/components/Basic.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(
    <React.StrictMode>
        <Test />
        <Test1 />
        <Test2 />
        <Basic />
    </React.StrictMode>

);
root1.render(
    <React.StrictMode>
        <Test2></Test2>
    </React.StrictMode>
)
