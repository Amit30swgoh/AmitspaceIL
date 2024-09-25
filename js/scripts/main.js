// scripts/main.js
import { initVisualizations } from './visualizations.js';
import { initTools } from './tools.js';
import { initMap } from './map.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        initVisualizations();
        initTools();
        initMap();
    } catch (error) {
        console.error('Error initializing modules:', error);
    }
});
