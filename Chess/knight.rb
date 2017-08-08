require_relative 'piece'

class Knight < Piece
  def initialize(color, pos)
    @sym = "N"
    super
  end
end
