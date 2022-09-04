class students {
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
        
    
    }
    
    designation = 'student';
    Greetings= 'Assalamu alaikum';
    faculty = 'CSE';
    dept = 'ece';
    level = 'level -1 semester -1';
    varsityName = 'HSTU, Dinajpur - 5200';
}
class top extends students{
    
    studyTime(time){
        console.log(`study time ${time}`);
    }
    constructor(name, location, time){
        super(name, location);
        this.time = time;

    }
}
class loser extends students{
    
    studyTime(time){
        console.log(`study time ${time}`);
    }
    constructor(name, location, time){
        super(name, location);
        this.time = time;

    }

}

const hasan = new loser ('hasan', ' sidpur', ' 2 hours');
console.log(hasan);