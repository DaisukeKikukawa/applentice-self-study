function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const num = parseInt(nums[0], 10);
  const N = parseInt(nums[0], 10);
  let X = parseInt(nums[1], 10);
  let count = N;
  
  let donuts = [];
  
  
  for (let i = 1;i <= N; i++) {
    let tmp = parseInt(args[i], 10);
    donuts.push(tmp);
  }
  const aryMin = function (a, b) {return Math.min(a, b);}
  const minDonuts = donuts.reduce(aryMin); 
  // console.log(minDonuts)
  for (let i = 0; i < N;i++) {
    X -= donuts[i];
  }
  while(minDonuts <= X ){
    X -= minDonuts;
    count++;
  }
  console.log(count)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
