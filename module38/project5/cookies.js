const getcookiesByName = (name) => {
    const cokieString = document.cookie;
    const cookiesParse = cokieString.split(';');
    const cookies = cookiesParse.find(cookie => cookie.includes(name));
    if(cookies){
        const cookieValue = cookies.split('=')[1];
        return cookieValue;
    }
}


//if we wanna get any value of cookie of given parameter
//first, paste this code to console
//next, for a specific parameter, e.g. country:

getcookiesByName('country');
//'US'

