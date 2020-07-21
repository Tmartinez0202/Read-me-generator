// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  #${data.description}
  #${data.install}
  #${data.usage}
  #${data.name}
  #${data.license}
  #${data.badges}
  #${data.contribution}
  #${data.tests}
  #${data.needToKnow}


`;
}

module.exports = generateMarkdown;

