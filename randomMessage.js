let message = "";
// Output

const generateRandomMessage = () => {
    const randomWords = ["noob", "sean", "kaka v420", "pro", "gru"];
    const endOfString = ["is cool", "is dumb", "is pro", "is noob", "is bad", "is poggers", "lol"];

    const indexGenerator1 = Math.floor(Math.random() * randomWords.length);
    const indexGenerator2 = Math.floor(Math.random() * endOfString.length);

    message = `${randomWords[indexGenerator1]} ${endOfString[indexGenerator2]}`;
    return message;
}

console.log(generateRandomMessage());