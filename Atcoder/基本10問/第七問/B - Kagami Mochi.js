function main(input) {
  const args = input.split('\n');
  const N = args[0];
  const d = args.slice(1, args.length - 1).map((n) => parseInt(n, 10));

  const arrayB = d.filter((element, index) => {
      return d.indexOf(element) == index;
  })
  console.log(arrayB.length)

}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
