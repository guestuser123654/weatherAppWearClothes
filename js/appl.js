window.addEventListener('load', () =>{
    let long;
    let lat;
//setting for the data to load

//
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
        long =position.coords.longitude;
        lat = postion.coords.latitude;
       const proxy ="https://cors-anywhere.herokuapp.com/";
       const api = `https://api.darksky.net/forecast/818c1882586afdc68070e2267b152279/${lat},${long}`;

       //calling for the api to be changed since coord has been changed
         fetch(api)
        .then(response=>{
         return response.jason();
       
     })
          .then(data => {                                                                                                     
          console.log(data);
          const {temperature,summary} =data.currently;
                    
          //set Dom Elements from the API
          temperatureDegree.textContent = temperature ;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;





     });

         
//set Dom Elements from the API 
        });
     }                                                          
          
});

     