function main(input) {
  const args = input.split("\n");
  const nums = args[0].split(" ");
  const N = parseInt(nums[0], 10);
    let maxDivCount = 0;  // 最大の割れる回数
    let result = 1;       // 最も多く割れる数

    for (let i = 1; i <= N; i++) {
        let count = 0;  // 現在の数の割れる回数
        let num = i;
        while (num % 2 === 0) {
            count++;
            num /= 2;
        }
        if (count > maxDivCount) {
            maxDivCount = count;
            result = i;
        }
    }

    console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
