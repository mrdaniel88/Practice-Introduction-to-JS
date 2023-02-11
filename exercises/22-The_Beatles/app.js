function sing() {
    let complete = "";
    let first = "";
    let second = "";
    let third = "";
    let fourth = "";
    for (let i = 0; i < 4; i++) {
        first = "let it be, ";
        complete += first;
    }
    second = "whisper words of wisdom, ";
    complete += second;
    for (let j = 0; j < 5; j++){
        third = "let it be, ";
        complete += third;
    }
    fourth = "there will be an answer, let it be";
    complete += fourth;
    return complete;
}

//Your code above ^^^

console.log(sing());