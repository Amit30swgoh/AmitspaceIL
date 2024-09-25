// main.js
import { initVisualizations } from './visualizations.js';
import { initTools } from './tools.js';
import { initMap } from './map.js'; // Assuming you create a separate map.js file

document.addEventListener('DOMContentLoaded', () => {
    initVisualizations();
    initTools();
    initMap(); 
});
