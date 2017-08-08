class Piece

  attr_reader :color, :sym
  attr_accessor :current_pos

  def initialize(color, pos)
    @color = color
    @current_pos = pos
  end
end
