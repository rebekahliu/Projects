require_relative 'piece'

class Bishop < Piece
  def initialize(color, pos)
    @sym = "B"
    super
  end
end
