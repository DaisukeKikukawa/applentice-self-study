function main(input) {
  const args = input.split('\n');
  const nums = args[0].split(' ');
  const N = parseInt(nums[0], 10);
  const A = parseInt(nums[1], 10);
  const B = parseInt(nums[2], 10);
  
  function allsum(num){
    //String型に変換
    num = num.toString();
    //各桁の和を表す変数sumを定義
    let sum = 0;
    //文字列のi番目を取り出し、sumに足していく
    for(let i=0; i < num.length; i++){
    sum = sum + parseInt(num[i])
  }
  return parseInt(sum);
}
  
  let result = 0;
  for (let i = 1; i <=  N; i++) {
     let sum = allsum(i);
     if (sum >= A && sum <= B) {
       result += i;
     }
    }
  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
