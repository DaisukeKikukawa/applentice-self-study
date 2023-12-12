
def sum(x, y)
  # 関数を完成させてください
  total_num = 0
  (x..y).each do |num|
    total_num += num
  end
puts total_num
end

sum(10, 80)
