function main(input) {
    const args = input.split("\n");
    const nums = args[0].split(" ");
    const number_of_times = parseInt(nums[0], 10);
    const glass_water = parseInt(nums[1], 10);
    const mug_water = parseInt(nums[2], 10);

    let start_glass_water = 0;
    let start_mug_water = mug_water;

    let second_mug_water -= glass_water;
    let second_glass_water = 0;

    for (let i = 1;i <= number_of_times-3; i++) {
      // マグカップが空になるまでマグカップからグラスに水を移す。グラスには 200 ml, マグカップには 0 ml 入った状態になる。

        second_mug_water -= glass_water


    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
