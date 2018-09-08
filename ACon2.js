var request = require('request');
var moment = require('moment');
var momentTimezone = require('moment-timezone');



checkSoundLevels();


function checkSoundLevels(){

  var now = new Date();
  var hour = now.getHours();
  var day = now.getDay();
  var min = now.getMinutes();

  if ((hour == 8 && min == 45) || (hour == 8 && min == 48)) { 
      
    console.log("AC Turned ON", hour , min);

    request(
      {
        method: 'POST',
        url: 'http://182.163.112.220/v2/users/admin/devices/sonoff_jp2/relay',
        json: true,
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJzb25vZmZfanAyIiwiaWF0IjoxNTIzMjc0NzQwLCJqdGkiOiI1YWNiNTNmNGY5NTU0ZGRiM2VmMGVmYjUiLCJ1c3IiOiJhZG1pbiJ9.to6WWidZRdEtoy-YQou_uoBkxvDjuyewRYcpIrJiwJA",
        },
        body: true

        
      }, function(error, response, body){

      if(response.statusCode === 200){
        setTimeout(function(){
        }, 10000);
      } else {
        console.log('oops, there was an error');
        console.log(response.statusCode + ' :::: ' + response.body);
      }
    });
  }



  if ((hour == 20 && min == 0) || (hour == 20 && min == 3)) { 
    
    console.log("AC Turned OFF", hour , min);
    
    request(
      {
        method: 'POST',
        url: 'http://182.163.112.220/v2/users/admin/devices/sonoff_jp2/relay',
        json: true,
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJzb25vZmZfanAyIiwiaWF0IjoxNTIzMjc0NzQwLCJqdGkiOiI1YWNiNTNmNGY5NTU0ZGRiM2VmMGVmYjUiLCJ1c3IiOiJhZG1pbiJ9.to6WWidZRdEtoy-YQou_uoBkxvDjuyewRYcpIrJiwJA",
        },
        body: false

      }, function(error, response, body){

      if(response.statusCode === 200){
        setTimeout(function(){
        }, 10000);
      } else {
        console.log('oops, there was an error');
        console.log(response.statusCode + ' :::: ' + response.body);
      }
    });
  }

  	// console.log("Hi");
                                                                               
 
 
}

setInterval(checkSoundLevels, 2000);
