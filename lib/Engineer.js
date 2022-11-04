//The employee constructor makes sure it requires this file for context
const Employee = require('./employee');
// added this extension so now the information passes through employee then engineer
class Engineer extends Employee{
    constructor(name, email, id, gitHubname){
        super(name, email, id);
        this.github = gitHubname;

    }
    getGithub () {
        return this.github;
    }
    
    getRole(){
       return "Engineer" 
    }
}

module.exports = Engineer; 