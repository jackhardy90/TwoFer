const name = 'jeff'
function twoFer(name) {
    if(name){
        return `One for ${name}, one for me.`
    }
    else{
        return 'One for you, one for me.'
    }
}


console.log(twoFer(name));

console.log(twoFer());