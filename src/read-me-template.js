//Function to get the lincences choices and return wit the badges 
const addingLincense = templateData => {
    const { licenses } = templateData; 
    if (!licenses) {
        return``; 
    }
    const liM = licenses.filter ( data => {
        if (data === "MIT"){
            return true;
        } else {
        return false; 
        }
    });
    //console.log (liM);
    function liMit () {
        if (liM === "MIT") {
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        }
        return''; 
    }; 

    const liA = licenses.filter (function(data) {
        if (data === "APACHE 2.0"){
            return true; 
        } else 
        return false 
    }); 
    //console.log (liA); 
    function liApache (){
        if (liA == "APACHE 2.0") {
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else 
        return''; 
    };   

    const liG = licenses.filter (function(data) {
        if (data === "GPL 3.0"){
            return true; 
        } else
        return false
    });
    console.log(liG); 
    function liGPL (){
        if (liG == 'GPL 3.0'){ 
            return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        } else 
        return''; 
    };         
    
    const liB = licenses.filter (function(data) {
        if (data === "BSD 3"){
            return true; 
        }
    });
    function liBsd (){
        if (liB == "BSD 3"){ 
            return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause))';
        }
    }; 
    return `${liMit()} ${liApache()} ${liGPL()} ${liBsd()}`
};

module.exports = templateData => {
const { projectName, description, githubUsername, emailAddress, runCommand, runTest, repoInfo, contributing } = templateData;
return `# ${projectName}
## Description
${description}

## Table of Contents 
* [Installation](#installation)
* [Test](#test) 
* [Lincense](#lincense)
* [Contribution](#contribution)

## Installation
to test install the program and dependecies ${runCommand}

## Test 
To test the program run ${runTest}

## Lincese 
${addingLincense(templateData)}

## Contribution 
${contributing}

## Links and Repo Information 
- GitHub: ${githubUsername}
- Repo information: ${repoInfo}

## Contact 
- Email : ${emailAddress}`
};
