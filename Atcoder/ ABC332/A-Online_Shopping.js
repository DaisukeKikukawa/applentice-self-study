function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const purchase_kind_num = parseInt(nums[0], 10);
  const purchase_money_flg = parseInt(nums[1], 10);
  const postage = parseInt(nums[2], 10);

  // コードを入れる
  let total_amount = 0;
  for (let i = 1; i <= purchase_kind_num; i++) {
    let nums_2 = args[i].split(" ");
    total_amount += parseInt(nums_2[0], 10) * parseInt(nums_2[1], 10);
  }
  if (total_amount < purchase_money_flg) {
    total_amount += postage;
  }
  console.log(total_amount);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
