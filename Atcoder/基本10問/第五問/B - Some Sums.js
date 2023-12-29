function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function solve(N, A, B) {
    let total = 0;
    for (let i = 1; i <= N; i++) {
        const sum = sumOfDigits(i);
        if (sum >= A && sum <= B) {
            total += i;
        }
    }
    return total;
}

// 例: N = 20, A = 2, B = 5 の場合
console.log(solve(20, 2, 5));
