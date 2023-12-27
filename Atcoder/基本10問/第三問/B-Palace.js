function main(input) {
  const args = input.split("\n");
  
  const nums1 = args[0].split(" ");
  const nums2 = args[1].split(" ");
  const nums3 = args[2].split(" ");
  
  // const num = parseInt(nums[0], 10);
  let N = parseInt(nums1[0], 10);
  let T = parseInt(nums2[0], 10);
  let A = parseInt(nums2[1], 10);
  let numbers = [];
  let averageTemps = [];
  let minumTemps = Infinity;  
  let pointIndex = 0; 
  
  for (let i=0;i<N;i++ ) {
    numbers.push(parseInt(nums3[i], 10));
  }
  for (let i=0;i<N;i++) {
    averageTemps.push(T - numbers[i]* 0.006);
  }
  for (let i=0;i<N;i++) {
    if (Math.abs(averageTemps[i] - A) <= minumTemps) {
      minumTemps = Math.abs(averageTemps[i] - A);
      pointIndex = i;
    }
  }
  
  console.log(pointIndex + 1);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
