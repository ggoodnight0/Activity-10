function createSVG({ text, textColor, shape, shapeColor }) {
    return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="300" height="200" fill="${shapeColor}" />
    <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
  </svg>`;
  }
  
  module.exports = { createSVG };
  