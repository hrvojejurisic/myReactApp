import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import { Routing } from 'modules';

ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
