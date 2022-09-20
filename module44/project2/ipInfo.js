 let ipAddr;
 fetch('https://api.ipify.org/?format=json')
.then(res => res.json())
.then(data => {
    ipAddr = data.ip;
    // console.log(ipAddr);
    getCountry(data.ip);
})

// const ip = getCountry();

// console.log('This is a test');
function getCountry(ip){
    // console.log(ip);
    
    


    fetch(`https://ipinfo.io/${ipAddr}/geo`)
    .then(res => res.json())
    .then(data => displayInfo(data))

function displayInfo(data){
    


    console.log(data);
    const ipInfo = document.getElementById('ipInfo');
    ipInfo.innerHTML = `
    <div>
    <h2>Country: ${data.country}</h2>
    <h2>Region: ${data.region}</h2>
    <h2>City: ${data.city}</h2>
    <h2>Location: ${data.loc}</h2>
    <h2>Timezone: ${data.timezone}</h2>
    <h2>Postal: ${data.postal}</h2>
    <h2>Host Name: ${data.hostname}</h2>
    <h2>Organization Name: ${data.org}</h2>
    </div>
    `;
}
    
    
    
    const ipInfo = document.getElementById('ipaddress');
    ipInfo.innerHTML = `
    <div>
    <h2>IP Address: ${ip}</h2>
    
    
    </div>
    `;
    // return ip;
}

//see ip address
console.log(ipAddr);

//refresh apis
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', function(){
    location.reload();
})
