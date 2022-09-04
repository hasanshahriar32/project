class team {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }

}
class Instructor extends team{
    
    designation = 'web developer';
    team = 'web development';
    constructor(name,location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`at ${time}`);
    }
    createQuix(module){
        console.log(`create quiz ${module}`);
    }
    proivdeFeedback(){
        console.log(`${this.name} thanks for the feedback`);

    }


}


class developer extends team{ 
    designation = 'job placement';
    team = 'web development';
    tech;
    constructor(name,location,tech){
        super (name,location);
        this.tech = tech;
    }
    developFeature(feature){
        console.log(` develop the feature named: ${feature}`);
    }
    release(version){
        console.log(`release version ${version}`);
    }
    proivdeFeedback(){
        console.log(`${this.name} thanks for the feedback`);

    }
    

}

const amir = new developer('amir', 'karachi', 'javascript');
console.log(amir);
amir.developFeature('feature 1');
