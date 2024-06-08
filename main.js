function decrypt(string) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < 26; i++) {
      string = string.toLowerCase();
      let newString = '';
      for(let j = 0; j < string.length; j++) {
        let newCharachter = '';
        for (let k = 0; k < 26; k++) {
            if (string[j] === alphabet[k]) {
                newCharachter = alphabet[(k + i) % 26];
                break;
            }
        }
        if (newCharachter === '') {
            newCharachter = string[j]
        }
        newString += newCharachter;
      }
      console.log(newString);
    }
}
decrypt("This is a test.")