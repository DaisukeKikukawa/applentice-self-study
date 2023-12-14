conversion_rates = {
  usd: 1.0,
  jpy: 110.0,
  eur: 0.8
}

def convert_currency(amount, source_currency, target_currency, conversion_rates)
  # 関数を完成させてください
  puts amount * conversion_rates[target_currency]
end

convert_currency(100, :usd, :jpy, conversion_rates)

