let total = prompt('How many km are left to go?');

// Your code below:
function calculate(km) {
    if (km > 100) {
        let answer = "We still have a bit of driving left to go";
        return answer;
    }
    else if (km > 50) {
        let answer = "We'll be there in 5 minutes";
        return answer;
    }
    else {
        let answer = "I'm parking. I'll see you right now";
        return answer;
    }
}

console.log(calculate(total));