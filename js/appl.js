window.addEventListener('load', () =>{
    
    let long;
    let lat;
    let  temperatureDescription = document.querySelector
    (".temperature-description"
    );
    let  temperatureDegree = document.querySelector(".temperature-degree");
    let  locationTimezone = document.querySelector(".location-timezone");
     //setting for the data to load

     //
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
        long =position.coords.longitude;
        lat = position.coords.latitude;
       const proxy ="https://cors-anywhere.herokuapp.com/";
       const api = `${proxy} https://api.darksky.net/forecast/818c1882586afdc68070e2267b152279/${lat},${long}`;

       //calling for the api to be changed since coord has been changed
       //to fetch the api then when received
         fetch(api)
        .then(response=>{
         return response.json(); 
       
     })
          .then(data => {                                                                                                     
          console.log(data);
          const {temperature, summary} = data.currently;
                    
          //set Dom Elements from the API
          temperatureDegree.textContent = temperature ;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;





     });

         
//set Dom Elements from the API 
        });
     }                                                          
          
});

     