let wearCoat = function(degrees){ 
    if ( degrees=== "0F" ){ 
        console.log("надень курточку пжпжпжп") 
    } 
    else if ( degrees === '30F' ){ 
        console.log ( "надень пальто и чт-то еще") 
    } 
    else if ( degrees >= '50F'){ 
        console.log( "надень пальто ") 
    } 
    else { 
        console.log ('иди раздетый') 
    } 
 } 
 wearCoat( '0F') 
 wearCoat( '50F') 
 wearCoat( '97F') 
 wearCoat( '30F')
