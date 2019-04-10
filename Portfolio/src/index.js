require('offline-plugin/runtime').install();

import './fonts/libre-baskerville-v5-latin-regular.woff';
import './fonts/libre-baskerville-v5-latin-regular.woff2';

import './index.html';
import './index.scss';
import './scripts/script.js';
import App from './scripts/script';

document.addEventListener('DOMContentLoaded', () => {
    const app = new App();

    app.init();
});