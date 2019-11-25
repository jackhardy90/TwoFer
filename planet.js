// we want earth years in seconds

// let daysOnEarth = (1) //1 earth year 
// let daysOnMercury = (0.2408467)
// let daysOnVenus = (0.61519726)
// let daysOnMars = (1.8808158)
// let daysOnJupiter = (11.862615)
// let daysOnSaturn = (29.447498)
// let daysOnUranus = (84.016846)
// let daysOnNeptune = (164.79132)

// switch (spaceAge = days * 86,400) {
//     case daysOnEarth:
//         spaceAge = 10,000,000 / 31.69;
//         break
//     case daysOnMercury:
//         spaceAge = 0.2408467 / 31.69;
//         break
    

// }


const age = (planet, earthSeconds) => {
    const earthYears = earthSeconds / 31557600

    let result = 0;

    if (planet === 'earth') {
        result = earthYears;
    }
    else if (planet === 'mercury'){
        result = earthYears / 0.2408467;
    }
    else if (planet === 'venus'){
        result = earthYears / 0.2408467;
    }

    return Number(result.toFixed(2));
}
      
    if(age('earth', 1000000000) === 31.69) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('mercury', 2134835688) === 280.88) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('venus', 189839836) === 9.78) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('mars', 2129871239) === 35.88) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('jupiter', 901876382) === 2.41) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('saturn', 2000000000) === 2.15) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('uranus', 1210123456) === 0.46) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }


    if(age('neptune', 1821023456) === 0.35) {
        console.log('SUCCESS');
    }
    else {
        console.log('FAIL');
    }
 









