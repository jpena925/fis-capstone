puts 'Seeding Start'

nola_zips = [70112, 70113, 70114, 70115, 70116, 70117, 70118, 70119, 70122, 70124, 70125, 70126, 70127, 70128, 70129, 70130, 70131]
nola_streets = ['Adams St.', 'Arts St.', 'Basin St.', 'Bienville St.', 'Bourbon St.', 'Broad St.', 'Burgundy St.', 'Burdette St.', 'Calliope St.', 'Carrollton Ave.', 'Chartres St.', 'Cherokee St.', 'Clouet St.', 'Desire St.', 'Dryades St.', 'Esplanade Ave.', 'Euterpe St.', 'Freret St.', 'S Gayoso St.', 'Girod St.', 'Homer Plessy Way', 'Howard Ave.', 'Iberville St.','Marengo St.', 'Magazine St.', 'MLK Blvd.', 'Oak St.', 'N. Prieur St.', 'S. Prieur St.' 'Melpomene St.', 'Napoleon Ave.', 'Norman C. Francis Pkwy.', 'Pearl St.', 'Poydras St.', 'Port St.', 'Prytania St.', 'Royal St.', 'Scott St.', 'St. Claude Ave.', 'St. Ann St.', 'St. Roch Ave.', 'Tchoupitoulas St.', 'Terpsichore St.', 'Thalia St.', 'Toulouse St.', 'Ursulines St.']


User.create(username: 'jackpena', email: 'jackpena@gmail.com', password: '0', phone: '5045555555', zip: '70118')
User.create(username: 'theopena', email: 'theo@gmail.com', password: '0', phone: '5041111111', zip: '70119')
User.create(username: 'emiley', email: 'emiley@gmail.com', password: '0', zip: '70125')
User.create(username: 'beau', email: 'beau@gmail.com', password: '0', phone: '3231231234', zip: '70124')
User.create(username: 'natalie', email: 'natalie@gmail.com', password: '0', phone: '9852221258', zip: '70115')
User.create(username: 'randall', email: 'randall@gmail.com', password: '0', phone: '8176654372', zip: '70113')
User.create(username: 'sebastien', email: 'sebastien@gmail.com', password: '0', phone: '5020001234', zip: '70118')
User.create(username: 'myles', email: 'mylesm1@gmail.com', password: '0', phone: '9856434444', zip: '70125')

Property.create(address: '315 Cherokee St. New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 1120, price: 1100, date_available: Date.parse('01-07-2022'), features: 'Laundry in unit. Central AC and heating.', landlord: true, user_id: 1)
Property.create(address: '1121 Thalia St. New Orleans, LA 70119', zip: 70119, br:1, ba:1, pets:true, sqft: 750, price: 1250, date_available: Date.parse('05-08-2022'), features: 'Shared Laundry, Central AC. Original Wood flooring.', landlord: false, user_id: 2)
Property.create(address: '1537 Adams St. New Orleans, LA 70118', zip: 70118, br:2, ba:1, pets:true, sqft: 980, price: 1050, date_available: Date.parse('01-08-2022'), features: 'Backyard, Laundry, Central AC/Heating, Gated', landlord: true, user_id: 3)
Property.create(address: '2116 Burdette St. New Orleans, LA 70118', zip: 70118, br:3, ba:1, pets:true, sqft: 1350, price: 2100, date_available: Date.parse('1-06-2022'), features: 'Renovated Kitchen. New Floors. Huge Backyard. Laundry in Unit.', landlord: false, user_id: 4)
Property.create(address: '706 Gird St. New Orleans, LA 70130', zip: 70130, br:3, ba:2, pets:false, sqft: 1800, price: 4500, date_available: Date.parse('05-01-2022'), features: 'Downtown above Herbsaint. Laundry, huge balcony, central AC/Heating. Roof Access.', landlord: false, user_id: 5)
Property.create(address: '4230A S. Prieur St. New Orleans, LA 70125', zip: 70125, br:2, ba:1, pets:true, sqft: 750, price: 1450, date_available: Date.parse('06-01-2022'), features: 'Shared Laundry, Central AC.', landlord: true, user_id: 7)
Property.create(address: '1008 Third St. New Orleans, LA 70130', zip: 70130, br:3, ba:3, pets:false, sqft: 1580, price: 2500, date_available: Date.parse('06-10-2022'), features: 'Shared Laundry, Central AC. Original Wood flooring.', landlord: true, user_id: 8)



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


puts 'Seeding End'