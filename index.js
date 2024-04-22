import('inquirer')
  .then(({ default: inquirer }) => {
    const fs = require('fs');
    const { createSVG } = require('./svgGenerator');

    const questions = [
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => {
          return input.length > 0 && input.length <= 3 ? true : 'Please enter up to three characters.';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal number):'
      }
    ];

    function promptUser() {
      inquirer
        .prompt(questions)
        .then(answers => {
          const svgContent = createSVG(answers);
          fs.writeFile('logo.svg', svgContent, err => {
            if (err) {
              console.error('Error creating SVG file:', err);
            } else {
              console.log('Generated logo.svg');
            }
          });
        })
        .catch(err => console.error('Error:', err));
    }

    promptUser();
  })
  .catch(err => console.error('Error:', err));
