require "./item.rb"
require "./vending_machine.rb"
# 1
hot_cup_coffee = CupCoffee.new('hot');
cider = Drink.new('cider')
vending_machine = VendingMachine.new('サントリー')
snack = Snack.new("snack")
vending_machine.deposit_coin(100)
vending_machine.deposit_coin(100)
puts vending_machine.press_button(cider.item_name)

puts vending_machine.press_button(hot_cup_coffee.item_name)
vending_machine.add_cup(1)
puts vending_machine.press_button(hot_cup_coffee.item_name)

puts vending_machine.press_button(snack.item_name)
vending_machine.deposit_coin(100)
vending_machine.deposit_coin(100)
puts vending_machine.press_button(snack.item_name)
