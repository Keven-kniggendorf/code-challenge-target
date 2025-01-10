function reverseString(input: string): string {
    let char = input.split('');
    let i = 0;
    let k = char.length - 1;

    while (i < k) {
        let temp = char[i];
        char[i] = char[k];
        char[k] = temp;
        i++;
        k--;
    }

    return char.join('');
}

const inputString = "Exemplo de string";
const reversedString = reverseString(inputString);
console.log("String invertida:", reversedString);