    // function getAllClients() {
    // const myHeaders = new Headers();
  
    
    // //   since it's a get request you don't need to specify your content-type
    
    
    // myHeaders.append('Content-Type', 'application/json; charset=utf-8'); 
    // myHeaders.append('Transfer-Encoding', 'chunked'); 
    // myHeaders.append('Connection', 'keep-alive'); 
    // myHeaders.append('Set-Cookie', 'AWSALBTG=zqHrvSyK3tkABBlu+agL60p7oNXP0h10jmJ+sEVOKWQ2chqKCOdkLjBTnYPshASPSb2TIFAeX5UBpwRSUvDhGi5Gg8bpGconf3RGJOwawI+toB54Eau48BxklCm5zN71MpRQshfij6/+wBVjWsNK59S8Ry0+vH5TUH8COCnmMK8O; Expires=Sat, 01 Oct 2022 04:33:08 GMT; Path=/'); 
    // myHeaders.append('Set-Cookie', 'AWSALBTGCORS=zqHrvSyK3tkABBlu+agL60p7oNXP0h10jmJ+sEVOKWQ2chqKCOdkLjBTnYPshASPSb2TIFAeX5UBpwRSUvDhGi5Gg8bpGconf3RGJOwawI+toB54Eau48BxklCm5zN71MpRQshfij6/+wBVjWsNK59S8Ry0+vH5TUH8COCnmMK8O; Expires=Sat, 01 Oct 2022 04:33:08 GMT; Path=/; SameSite=None; Secure');
    // myHeaders.append('server', 'istio-envoy');
    // myHeaders.append('typeform-version', '2016-05-25');
    // myHeaders.append('x-build-date', '2022-08-05T11:35:42+02:00');
    // myHeaders.append('x-build-sha', '58bc94ac7bb17a4a2bbdccd99c085f3cadde135f');
    // myHeaders.append('x-envoy-upstream-service-time', '72');
    // myHeaders.append('x-release', '2802677921');
    // myHeaders.append('access-control-allow-methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
    // myHeaders.append('access-control-allow-headers', 'X-Typeform-Key, Content-Type, Authorization, Typeform-Version');
    // myHeaders.append('access-control-expose-headers', 'Location, X-Request-Id');
    // myHeaders.append('strict-transport-security', 'max-age=63072000; includeSubDomains');
    // myHeaders.append('Authorization', 'tfp_4evK2944yTUhuFsK7Mw4rK1QHh7uoKkQ5mSQkoK2ouet_hmJJK92hzHkm');
  
    // const myInit = {
      // method: 'GET',
      // headers: myHeaders,
      // mode: 'no-cors',
      // cache: 'default',
    // };
     
    // const myRequest = new Request('https://api.typeform.com/forms/B9mOgUOl/responses', myInit);
    // fetch(myRequest)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     feedback(data);
    //   });
    // }

    fetch('https://api.typeform.com/forms/B9mOgUOl/responses', {
      headers: {
      Authorization: '',
      method: 'GET',
      // headers: myHeaders,
      mode : 'no-cors',
      cache: 'default',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        feedback(data);
      })
    
    
      

    // getAllClients();

    function feedback(data) {
        document.getElementById('feedback').innerHTML = data;
    }