puts 'Seeding Start'

nola_zips = [70112, 70113, 70114, 70115, 70116, 70117, 70118, 70119, 70122, 70124, 70125, 70126, 70127, 70128, 70129, 70130, 70131]
nola_streets = ['Adams St.', 'Arts St.', 'Basin St.', 'Bienville St.', 'Bourbon St.', 'Broad St.', 'Burgundy St.', 'Burdette St.', 'Calliope St.', 'Carrollton Ave.', 'Chartres St.', 'Cherokee St.', 'Clouet St.', 'Desire St.', 'Dryades St.', 'Esplanade Ave.', 'Euterpe St.', 'Freret St.', 'S Gayoso St.', 'Girod St.', 'Homer Plessy Way', 'Howard Ave.', 'Iberville St.','Marengo St.', 'Magazine St.', 'MLK Blvd.', 'Oak St.', 'N. Prieur St.', 'S. Prieur St.' 'Melpomene St.', 'Napoleon Ave.', 'Norman C. Francis Pkwy.', 'Pearl St.', 'Poydras St.', 'Port St.', 'Prytania St.', 'Royal St.', 'Scott St.', 'St. Claude Ave.', 'St. Ann St.', 'St. Roch Ave.', 'Tchoupitoulas St.', 'Terpsichore St.', 'Thalia St.', 'Toulouse St.', 'Ursulines St.']


User.create(username: 'jackpena', email: 'jackpena@gmail.com', password: '0', phone: '5045555555', zip: '70118')

Property.create(address: '315 Cherokee St. New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 1120, price: 1100, date_available: Date.parse('01-07-2022'), features: 'Laundry in unit. Central AC and heating.', landlord: true, user_id: 1)

Image.create(image_url:'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_1_3.jpg', property_id: 1)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_3_3.jpg', property_id: 1)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_11_3.jpg', property_id: 1)
Image.create(image_url: 'https://i.ibb.co/9h7HTZs/aaaa.jpg', property_id: 1)

puts 'Seeding End'