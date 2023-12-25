function main(input) {
  const args = input.split("\n");
  // console.log(args); // [ '3 4', '5', '' ]
  const nums = args[0];
  // console.log(nums)
  let price = 700;
  if (nums[0] == "o") {
    price += 100;
  } else if (nums[1] == "o") {
    price += 100;
  } else if (nums[2] == "o") {
    price += 100;
  }
  console.log(price);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
