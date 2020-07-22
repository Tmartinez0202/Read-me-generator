function renderBadge(license){
  if (license != "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
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
  ${renderLink(data.license)}
  ${renderSection(data.license)}

  ## description
  #${data.description}

  ## install
  #${data.install}


  ## GitHub name
  #${data.name}


  ## license
  #${data.license}


  ## contribution
  #${data.contribution}


  ## tests
  #${data.test}


  ## Need to Know
  #${data.needToKnow}

  ## questions
  if you have any questions about the repo contact me at ${data.email}. you can find more of my projects at ${data.name}

`;
}

module.exports = generateMarkdown;

