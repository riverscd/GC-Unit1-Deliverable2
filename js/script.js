let petName = prompt("Name your pet.");
let energy= 0;
let happiness= 0;
let feed= "feed";
let walk= "walk";
let pet= "pet";

for (let i =0; i < 6; i++) {
    let action= prompt("feed, pet, or walk?");
    if (action===feed){
        energy+=2
    }
    if (action===pet){
        happiness+=1
    }
    if (action===walk){ 
        if (energy >0){
        energy-=1;
        happiness+=2;
        }
        else {
        alert("Not enough energy for a walk")
        }
    }
}
console.log(petName+ " has " + happiness + " happiness and " + energy + " energy.")