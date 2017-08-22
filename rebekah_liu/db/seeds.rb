# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do |i|
  User.create(username: Faker::Name.name)
  Artwork.create(title: Faker::HarryPotter.character, artist_id: i, image_url: "www.#{i}.com")
  ArtworkShare.create(artwork_id: i, viewer_id: i)
end
