module.exports = templateData => {
    console.log(templateData); 

return `# ${templateData.projectName}
## Description
${templateData.description}`; 

        
};



