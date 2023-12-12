def xor(x,y)
  if x == true && y == true
    puts false
  elsif x == true || y == true
    puts true
  else
    puts false
  end
end

xor(true, true)
xor(true, false)
xor(false, true)
xor(false, false)
