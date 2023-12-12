def time(second)
  h = second / 3600
  # puts h
  second -= 3600 * h
  m = second / 60
  second -= 60 * m
  s = second
  puts "#{h}:#{m}:#{s}"
end

time(86400)
