require_relative 'piece'

class Queen < Piece
  def initialize(color, pos)
    @sym = "Q"
    super
  end
end
