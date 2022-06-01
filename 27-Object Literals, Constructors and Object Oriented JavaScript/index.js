//Object Literal for creating object
let car ={
    name : 'Mauti 800',
    topSpeed : 89,
    run : function(){
        console.log('car is ranning')
    }
}

//we have alredy seen constructor like this:
//new Date();

//Creating a constructor for cars
function GeneralCar(givenName,givenSpeed){
this.name = givenName;
this.topSpeed = givenSpeed;
this.run = function(){
    console.log(`${this.name} is running`)
}
this.analyze = function(){
    console.log(`This car is slower by ${200 - this.topSpeed} km/h than Mercedes`)
}
}
car1 = new GeneralCar(`Nissan`, 180);
car2 = new GeneralCar(`Marutu Alto`, 80);car3 = new GeneralCar(`Marcedes`, 200);
console.log(car3);