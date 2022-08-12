function leapYear (year){
    if (year %4 ==0){
        if (year %100 == 0 ){
            if (year%400 == 0){
                return 'leap year';
        }
        else{
            return 'not leap year';
        }
        }
        else{
            return 'leap year';
        }
        
    }
    else{
        return 'not leap year';
    }
}


console.log(leapYear(2000));
console.log(leapYear(1996));
