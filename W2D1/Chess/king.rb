require_relative 'piece'
require_relative 'module'

class King < Piece
  include SteppingPiece
  
  def initialize(color, pos)
    @sym = "K"
    super
  end
end
