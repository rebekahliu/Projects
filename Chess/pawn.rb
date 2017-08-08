require_relative 'piece'

class Pawn < Piece
  def initialize(color, pos)
    @sym = "P"
    super
  end
end
