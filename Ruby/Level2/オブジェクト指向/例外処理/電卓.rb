def calculate(num1, num2, operator)
  # 整数チェック
  raise 'num1、num2 には整数を入力してください' unless num1.is_a?(Integer) && num2.is_a?(Integer)

  # 演算子チェック
  raise '演算子には +、-、*、/ のいずれかを使用してください' unless ['+', '-', '*', '/'].include?(operator)

  # 計算実行
  case operator
  when '+'
    num1 + num2
  when '-'
    num1 - num2
  when '*'
    num1 * num2
  when '/'
    num1 / num2
  end
end

puts "1番目の整数を入力してください:"
num1 = gets.chomp.to_i

puts "2番目の整数を入力してください:"
num2 = gets.chomp.to_i

puts "演算子(+, -, *, /)を入力してください:"
operator = gets.chomp

begin
  result = calculate(num1, num2, operator)
  puts result
rescue ZeroDivisionError
  puts "ゼロによる割り算は許可されていません"
rescue => e
  puts e.message
end
