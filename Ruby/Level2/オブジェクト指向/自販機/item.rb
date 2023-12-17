class Item
  attr_accessor :item_name
  def initialize(item_name)
    @item_name = item_name
  end
end

class Drink < Item
end

class CupCoffee < Item
end

class Snack < Item
end
