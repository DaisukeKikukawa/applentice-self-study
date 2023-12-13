def print_capitals(capitals)
  # 関数を完成させてください
  capitals.each do |key,value|
    puts "#{key}の首都は#{value}です"
  end
end

print_capitals({ '日本' => '東京', 'アメリカ' => 'ワシントンD.C.' })
