// Your code here:
function sing() {
    let complete = "";
    let lyrics = "";
    for (let i = 99 ; i >= 0; i--) {
        let j = i-1;
        if (i == 1) {
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
            //complete = lyrics + i + " bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall."
        }
        else if (i == 0) {
            console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
            // complete = lyrics + i + " bottles of milk on the wall," + i + " bottles of milk. Take one down and pass it around, " + j + " bottles of milk on the wall."
        }
        else if (i == 2) {
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${j} bottle of milk on the wall.`);
            // complete = lyrics + i + " bottles of milk on the wall," + i + " bottles of milk. Take one down and pass it around, " + j + " bottle of milk on the wall."
        }
        else {
            console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${j} bottles of milk on the wall.`);
            
            // complete = lyrics + "No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall."
        }
        // console.log(complete);
    }
}

sing();