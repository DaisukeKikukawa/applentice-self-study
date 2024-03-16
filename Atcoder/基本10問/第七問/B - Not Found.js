function main(input) {
  const args = input.split("\n");
  const S = args[0]
  let result = ""
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  for (let i = 0; i < alphabet.length; i++) {
    if (!S.includes(alphabet[i])) {
      result = alphabet[i];
      break;
    } 
  }
  if (result) {
    console.log(result);
  } else {
    console.log("None");
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
