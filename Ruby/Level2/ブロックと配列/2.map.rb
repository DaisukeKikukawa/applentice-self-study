def square(numbers)
  # 関数を完成させてください
  numbers.map {|number| number.pow(2)}
end

squared_numbers = square([5, 7, 10])
print squared_numbers
