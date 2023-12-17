require './item.rb'

class VendingMachine

  @@deposit = 0
  @@cup = 0

  def initialize(maker_name)
    @maker_name = maker_name
  end

  def press_button(item_name)
    if @@deposit < 100
      return 'お金がたりません1'
    else
      if item_name =="cola" && @@deposit >= 150
        @@deposit -= 150
        return "cola"
      elsif item_name == "snack" && @@deposit >= 150
        @@deposit -= 150
        return "potato chips"
      elsif item_name == 'cider'
        @@deposit -= 100
        return "cider"
      elsif item_name = 'hot' || item_name = 'ice'
        if @@cup < 1
          return "カップが足りません"
        end
        @@deposit -= 100
        return "#{item_name} cup coffee"
      else
        return "お金が足りません2"
      end
    end
  end

  def deposit_coin(money)
    if money == 100
      @@deposit += 100
      press_manufacturer_name
    else
      return '100円しか入れられません'
    end
  end

  def add_cup(number)
    @@cup += number
    if @@cup >= 100
      @@cup == 100
    end
  end

  private

  def press_manufacturer_name
    return @maker_name
  end

end
