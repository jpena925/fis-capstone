puts 'Seeding Start'

nola_zips = [70112, 70113, 70114, 70115, 70116, 70117, 70118, 70119, 70122, 70124, 70125, 70126, 70127, 70128, 70129, 70130, 70131]
nola_streets = ['Adams St.', 'Arts St.', 'Basin St.', 'Bienville St.', 'Bourbon St.', 'Broad St.', 'Burgundy St.', 'Burdette St.', 'Calliope St.', 'Carrollton Ave.', 'Chartres St.', 'Cherokee St.', 'Clouet St.', 'Desire St.', 'Dryades St.', 'Esplanade Ave.', 'Euterpe St.', 'Freret St.', 'S Gayoso St.', 'Girod St.', 'Homer Plessy Way', 'Howard Ave.', 'Iberville St.','Marengo St.', 'Magazine St.', 'MLK Blvd.', 'Oak St.', 'N. Prieur St.', 'S. Prieur St.' 'Melpomene St.', 'Napoleon Ave.', 'Norman C. Francis Pkwy.', 'Pearl St.', 'Poydras St.', 'Port St.', 'Prytania St.', 'Royal St.', 'Scott St.', 'St. Claude Ave.', 'St. Ann St.', 'St. Roch Ave.', 'Tchoupitoulas St.', 'Terpsichore St.', 'Thalia St.', 'Toulouse St.', 'Ursulines St.']


User.create(username: 'jackpena', email: 'jackpena@gmail.com', password: '0', phone: '5045555555', zip: '70118')
User.create(username: 'theopena', email: 'theo@gmail.com', password: '0', phone: '5041111111', zip: '70119')
User.create(username: 'emiley', email: 'emiley@gmail.com', password: '0', zip: '70125')
User.create(username: 'alex', email: 'alex@gmail.com', password: '0', phone: '3231231234', zip: '70124')
User.create(username: 'natalie', email: 'natalie@gmail.com', password: '0', phone: '9852221258', zip: '70115')
User.create(username: 'randall', email: 'randall@gmail.com', password: '0', phone: '8176654372', zip: '70113')
User.create(username: 'sebastien', email: 'sebastien@gmail.com', password: '0', phone: '5020001234', zip: '70118')
User.create(username: 'elise', email: 'elise@gmail.com', password: '0', phone: '5041231234', zip: '70122')
User.create(username: 'lamar', email: 'lamar@gmail.com', password: '0', zip: '70127')
User.create(username: 'stanley', email: 'stanley@gmail.com', password: '0', phone: '8712367546', zip: '70115')
User.create(username: 'max', email: 'max@gmail.com', password: '0', phone: '5555555555', zip: '70115')
User.create(username: 'patrick', email: 'patrick@gmail.com', password: '0', phone: '5067897686', zip: '70118')
User.create(username: 'zoila', email: 'zoila@gmail.com', password: '0', phone: '5042928709', zip: '70119')
User.create(username: 'lylia', email: 'lylia@gmail.com', password: '0', phone: '5045045040', zip: '70125')
User.create(username: 'trevon', email: 'trevon@gmail.com', password: '0', phone: '1234567890', zip: '70125')




Property.create(address: '315 Cherokee St. New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 1120, price: 1100, date_available: Date.parse('01-07-2022'), features: 'Laundry in unit. Central AC and heating.', landlord: true, user_id: 1)
Property.create(address: '1121 Thalia St. New Orleans, LA 70119', zip: 70119, br:1, ba:1, pets:true, sqft: 750, price: 1250, date_available: Date.parse('05-08-2022'), features: 'Shared Laundry, Central AC. Original Wood flooring.', landlord: false, user_id: 2)
Property.create(address: '1537 Adams St. New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 980, price: 1050, date_available: Date.parse('01-08-2022'), features: 'Backyard, Laundry, Central AC/Heating, Gated', landlord: true, user_id: 3)
Property.create(address: '2116 Burdette St. New Orleans, LA 70118', zip: 70118, br:3, ba:1, pets:true, sqft: 1350, price: 2100, date_available: Date.parse('01-06-2022'), features: 'Renovated Kitchen. New Floors. Huge Backyard. Laundry in Unit.', landlord: false, user_id: 4)
Property.create(address: '706 Gird St. New Orleans, LA 70130', zip: 70130, br:3, ba:2, pets:false, sqft: 1800, price: 4500, date_available: Date.parse('01-05-2022'), features: 'Downtown above Herbsaint. Laundry, huge balcony, central AC/Heating. Roof Access.', landlord: false, user_id: 5)
Property.create(address: '4230A S. Prieur St. New Orleans, LA 70125', zip: 70125, br:2, ba:1, pets:true, sqft: 750, price: 1450, date_available: Date.parse('01-06-2022'), features: 'Shared Laundry, Central AC.', landlord: true, user_id: 7)
Property.create(address: '1008 Third St. New Orleans, LA 70130', zip: 70130, br:3, ba:3, pets:false, sqft: 1580, price: 2500, date_available: Date.parse('10-07-2022'), features: 'Shared Laundry, Central AC. Original Wood flooring.', landlord: true, user_id: 8)
Property.create(address: '7706 Burthe St, New Orleans, LA 70118', zip: 70118, br:6, ba:3, pets:true, sqft: 3580, price: 5500, date_available: Date.parse('10-10-2022'), features: 'Incredible remodel. Gorgeous Kitchen, new appliances.', landlord: true, user_id: 9)
Property.create(address: '543 Broadway St, New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 1110, price: 2500, date_available: Date.parse('01-08-2022'), features: 'Huge two bedroom, great applicances and laundry in unit. Very walkable.', landlord: true, user_id: 10)
Property.create(address: '547 Joseph St, New Orleans, LA 70118', zip: 70118, br:0, ba:1, pets:true, sqft: 1200, price: 1010, date_available: Date.parse('05-05-2022'), features: 'The studio of your dreams! Laundry in unit. Right by Audubon Park!', landlord: true, user_id: 11)
Property.create(address: '1933 Bordeaux St,New Orleans, LA 70125', zip: 70125, br:1, ba:1, pets:false, sqft: 1750, price: 800, date_available: Date.parse('15-05-2022'), features: 'In the heart of Broadmoor, easy to get anywhere by foot!', landlord: true, user_id: 12)
Property.create(address: '7911 S Claiborne Ave, New Orleans, LA 70125', zip: 70125, br:0, ba:1, pets:true, sqft: 1210, price: 750, date_available: Date.parse('01-06-2022'), features: 'So much to do in this neighborhood. Beautiful renovation, all new appliances.', landlord: true, user_id: 13)
Property.create(address: '4433 S Johnson St, New Orleans, LA 70125', zip: 70125, br:2, ba:3, pets:false, sqft: 1250, price: 2100, date_available: Date.parse('01-10-2022'), features: 'Luxury like you have never seen.', landlord: true, user_id: 14)
Property.create(address: '3001 Octavia St, New Orleans, LA 70125', zip: 70125, br:1, ba:2, pets:true, sqft: 750, price: 1450, date_available: Date.parse('07-07-2022'), features: 'None', landlord: true, user_id: 15)



Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_3.jpg', property_id: 1)
Image.create(image_url:'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_1_3.jpg', property_id: 1)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_3_3.jpg', property_id: 1)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/090/2297090_11_3.jpg', property_id: 1)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/061/2340061_1.jpg', property_id: 2)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/061/2340061_8_1.jpg', property_id: 2)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/061/2340061_11_1.jpg', property_id: 2)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/061/2340061_12_1.jpg', property_id: 2)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/565/2339565_1.jpg', property_id: 3)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/565/2339565_5_1.jpg', property_id: 3)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/565/2339565_7_1.jpg', property_id: 3)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/565/2339565_10_1.jpg', property_id: 3)

Image.create(image_url: 'https://photos.zillowstatic.com/fp/05b0e6cb83e577e05d61ace801715349-uncropped_scaled_within_1536_1152.webp', property_id: 4)
Image.create(image_url: 'https://photos.zillowstatic.com/fp/e5d16744d61fc0b415c65220a9c476f5-uncropped_scaled_within_1536_1152.webp', property_id: 4)
Image.create(image_url: 'https://photos.zillowstatic.com/fp/4a74a3257bc6a27a7341cfeeffdb9a04-uncropped_scaled_within_1536_1152.webp', property_id: 4)
Image.create(image_url: 'https://photos.zillowstatic.com/fp/e08264a55823b3e9ec6461c44a1e41c3-uncropped_scaled_within_1536_1152.webp', property_id: 4)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/934/2339934_2.jpg', property_id: 5)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/934/2339934_3_2.jpg', property_id: 5)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/934/2339934_11_2.jpg', property_id: 5)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/934/2339934_15_2.jpg', property_id: 5)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/474/2336474_0.jpg', property_id: 6)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/474/2336474_9_0.jpg', property_id: 6)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/474/2336474_13_0.jpg', property_id: 6)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/474/2336474_27_0.jpg', property_id: 6)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/395/2338395_1.jpg', property_id: 7)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/395/2338395_4_1.jpg', property_id: 7)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/395/2338395_6_1.jpg', property_id: 7)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/395/2338395_7_1.jpg', property_id: 7)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/331/2338331_2.jpg', property_id: 8)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/331/2338331_3_2.jpg', property_id: 8)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/331/2338331_5_2.jpg', property_id: 8)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/331/2338331_10_2.jpg', property_id: 8)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/192/2336192_0.jpg', property_id: 9)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/192/2336192_4_0.jpg', property_id: 9)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/192/2336192_7_0.jpg', property_id: 9)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/192/2336192_22_0.jpg', property_id: 9)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/830/2331830_6.jpg', property_id: 10)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/830/2331830_3_6.jpg', property_id: 10)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/830/2331830_4_6.jpg', property_id: 10)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/830/2331830_11_6.jpg', property_id: 10)

#studio
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/257/2339257_1_0.jpg', property_id: 11)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/257/2339257_7_0.jpg', property_id: 11)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/257/2339257_8_0.jpg', property_id: 11)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/257/2339257_12_0.jpg', property_id: 11)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/644/2338644_3_1.jpg', property_id: 12)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/644/2338644_4_1.jpg', property_id: 12)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/644/2338644_8_1.jpg', property_id: 12)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/644/2338644_14_1.jpg', property_id: 12)

#studio
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/rent/f855e1b0-1b1a-447d-9831-f1446deaeb99/bigphoto/1_1.jpg', property_id: 13)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/rent/f855e1b0-1b1a-447d-9831-f1446deaeb99/bigphoto/37_1.jpg', property_id: 13)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/rent/f855e1b0-1b1a-447d-9831-f1446deaeb99/bigphoto/39_1.jpg', property_id: 13)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/rent/f855e1b0-1b1a-447d-9831-f1446deaeb99/bigphoto/40_1.jpg', property_id: 13)

Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/112/2340112_0.jpg', property_id: 14)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/112/2340112_2_0.jpg', property_id: 14)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/112/2340112_3_0.jpg', property_id: 14)
Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/112/2340112_6_0.jpg', property_id: 14)

# Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/219/2332219_0.jpg', property_id: 15)
# Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/219/2332219_6_0.jpg', property_id: 15)
# Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/219/2332219_9_0.jpg', property_id: 15)
# Image.create(image_url: 'https://ssl.cdn-redfin.com/photo/166/bigphoto/219/2332219_25_0.jpg', property_id: 15)

Favorite.create(user_id: 1, property_id:2)
Favorite.create(user_id: 1, property_id:6)
Favorite.create(user_id: 2, property_id:7)
Favorite.create(user_id: 3, property_id:2)
Favorite.create(user_id: 3, property_id:4)
Favorite.create(user_id: 3, property_id:5)
Favorite.create(user_id: 5, property_id:6)
Favorite.create(user_id: 5, property_id:1)
Favorite.create(user_id: 5, property_id:2)
Favorite.create(user_id: 5, property_id:3)
#
Favorite.create(user_id: 1, property_id:9)
Favorite.create(user_id: 6, property_id:9)
Favorite.create(user_id: 7, property_id:9)
Favorite.create(user_id: 7, property_id:10)
Favorite.create(user_id: 7, property_id:11)
Favorite.create(user_id: 7, property_id:1)
Favorite.create(user_id: 7, property_id:4)
Favorite.create(user_id: 1, property_id:12)
Favorite.create(user_id: 1, property_id:14)
Favorite.create(user_id: 8, property_id:14)
Favorite.create(user_id: 9, property_id:2)
Favorite.create(user_id: 10, property_id:4)
Favorite.create(user_id: 11, property_id:3)
Favorite.create(user_id: 12, property_id:11)
Favorite.create(user_id: 15, property_id:9)


puts 'Seeding End'