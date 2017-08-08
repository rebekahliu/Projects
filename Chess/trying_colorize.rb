require 'colorize'

array = [1,2,3]
array.each do |space|
  if space == 2
    print space.to_s.colorize(:color => :blue) + "\n"
  else
    print space
  end
end
