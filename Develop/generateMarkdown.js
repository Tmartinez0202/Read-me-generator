function renderBadge(license){
  if (license != "None"){
    return `![GitHub license](https://img.sheilds.io/badge/license-${license}-blue.svg)`
  }
  return ""
}
function renderLink(license){
  if (license != "None"){
    return (`* [license](#license)`)
  }
  return ""
}
function renderSection(license){
  if (license != "None"){
    return(`## license
    
    this project is licensed under the ${license} license`)
  }
  return ""
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}

  ## description
  #${data.description}


  #${data.install}
  #${data.usage}
  #${data.name}
  #${data.license}
  #${data.badges}
  #${data.contribution}
  #${data.tests}
  #${data.needToKnow}

  ## questions
  if you have any questions about the repo contact me at ${data.email}. you can find more of my projects at ${data.github}

`;
}

module.exports = generateMarkdown;

