def print_names(names)
  # 関数を完成させてください
  names.each_with_index do |name,index|
    puts "#{index+1}. #{name}"
  end
  # names.each_with_index { |name,index| puts "#{index+1}. #{name}"}
end

print_names(['上田', '田仲', '堀田'])
