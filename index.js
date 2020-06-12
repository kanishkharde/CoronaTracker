function updateMap()
{   
    console.log("Updating map with realtime data")
    fetch("data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp)
            rsp.forEach(element => {
                latitude = element.Lat;
                longitude = element.Long;
                cases = element.confirmed;
                country = element.Country;
                if (cases>200000){
                    color = "rgb(25,0,0)";
                }
                else if(cases>100000 && cases<200000){
                    color= "rgb(108,0,0)";
                }    
                else if(cases>50000 && cases<100000){
                    color= "rgb(155,0,0)";
                }    
                else if(cases>20000 && cases<50000){
                    color= "rgb(255,0,0)";
                }
                else if(cases>10000 && cases<20000){
                    color= "rgb(255,102,0)";
                }
                else if(cases>5000 && cases<10000){
                    color= "rgb(255,152,0)";
                }
                else if(cases>1000 && cases<5000){
                    color= "rgb(255,192,10)";
                }
                else if(cases>500 && cases<1000){
                    color= "rgb(235,232,0)";
                }
                else if(cases>100 && cases<500){
                    color= "rgb(0,128,0)";
                }

                else{
                    color ="rgb(0,255,0)"
                }    

                // mark on the map
                var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                    `The total no of cases in ${country}  is ${cases}`
                    //  Region= ${region}`
                    );
                new mapboxgl.Marker({
                    color:color
                })
                .setLngLat([longitude,latitude])
                .setPopup(popup)
                .addTo(map);


        });
        
    })
}
let interval=20000;
setInterval(updateMap,interval);
