const sampleRooms = [
	{
		title: 'A Double Person Room  ',
		description:
			'In this Room ther are two beds are Present and two sofas are given. Their infrastructure is good. And the Light Condition is also Good.',
		image: 
		 "https://media.istockphoto.com/id/153565274/photo/hotel-room.webp?a=1&s=612x612&w=0&k=20&c=a-QCoXyROuD3iYr8imRWx0Ta-MP4IYQogBFJYcaoj3A=",
		price: 3500,
		location: "RajendraNagar, New Delhi",
		country: "India",
	},
	{
		title: "Double Seated Luxry Room",
		description:
			"The Room is so clean and their infrastructure is good. These Rooms are not so Costly.",
		image:
			 "https://media.istockphoto.com/id/451855205/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=4HK3cY4rp6RSL_w9RneFmDjb0CJS3CjxtVvZLRuH7ME=",
		price: 5500,
		location: 'Civil Line, Prayagraj',
		country: 'India',
	},
	{
		title: 'A Single Bed Room',
		description:
			"In this Room one Bed is Present and the condition of Light and Water is also great.",
		image: 
			"https://media.istockphoto.com/id/115747135/photo/bedroom.jpg?s=612x612&w=0&k=20&c=ohveOzCDCLCcySTrKWNiof5mtBG6N9LNNFBhYsccH7o=",
		price: 2500,
		location: 'Lucknow, Aminabad',
		country: 'India',
	},
	{
		title: 'Historic Hall with great Wall',
		description:
			'In this Hall, you got a lots of space and good facilities like water and light. ',
		image: 
			"https://media.istockphoto.com/id/521806786/photo/3d-rendering-of-empty-room-interior-white-brown-colors.webp?a=1&b=1&s=612x612&w=0&k=20&c=70Si4imgOtJSiLVSYGGZdJtxdabOyzWL5UwHxbatSVE=",
		price: 12500,
		location: 'Chaowk, Ayodhya',
		country: 'India',
	},
	{
		title: 'Treehouse Getaway',
		description:
			"In this Compartment, there are so much facilities are present. A big window are present in this room and is is so much Environment Friendly.",
		image:
		  "https://media.istockphoto.com/id/990278494/photo/empty-concrete-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=hsSXinMDrSbsd2k7345stWNhmn1cCQrIkuiAky1uf5g=",
		price: 18000,
		location: 'Near Gateway of India',
		country: 'India',
	},
	{
		title: 'Beachfront Paradise',
		description:
			'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
		image:
			"https://media.istockphoto.com/id/1933752815/photo/modern-interior-of-living-room-with-leather-armchair-on-wood-flooring-and-dark-blue-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gz4wbPmGwj5VNuKWw6V7WWKi1Gq-qjIGw4O2nj6JbHE=",
	
		price: 12000,
		location: 'Marine Drive',
		country: 'India',
	},
	{
		title: 'Rustic Cabin',
		description:
			'Spend your Nights with a Royality. ',
		image:
			"https://images.unsplash.com/photo-1720002337847-b9b6bfa12760?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 19000,
		location: 'Indira Nagar',
		country: 'India',
	},
	{
		title: 'Luxury House ',
		description:
			'Indulge in luxury living with panoramic city views from this stunning apartment.',
		image:
			"https://images.unsplash.com/photo-1457038770541-b6a1afae40f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZhY2FudCUyMHJvb218ZW58MHx8MHx8fDA%3D",
		price: 3500,
		location: 'Los Angeles',
		country: 'United States',
	},
	{
		title: 'Ski-In/Ski-Out Chalet',
		description:
			'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
		image:
			"https://images.unsplash.com/photo-1647996179012-66b87eba3d17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhY2FudCUyMHJvb218ZW58MHx8MHx8fDA%3D",
		price: 11000,
		location: 'Verbier',
		country: 'Switzerland',
	},
	{
		title: 'Serengeti',
		description:
			'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
		image:
			"https://plus.unsplash.com/premium_photo-1681824264970-bc526dd3bdbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZhY2FudCUyMHJvb218ZW58MHx8MHx8fDA%3D",
		price: 41000,
		location: 'Serengeti National Park',
		country: 'Tanzania',
	},
	{
		title: 'Canal House',
		description:
			"Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
		image:
			"https://plus.unsplash.com/premium_photo-1661884238187-1c274b3c3413?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 180000,
		location: 'Amsterdam',
		country: 'Netherlands',
	},
	{
		title: 'Private Retreat',
		description:
			'Have an entire room to yourself for a truly exclusive and unforgettable vacation experience.',
		image:
			"https://plus.unsplash.com/premium_photo-1724775094839-e24c1e839b16?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmFjYW50JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 10000,
		location: 'Fiji',
		country: 'Fiji',
	},
	{
		title: 'Charming Cottage ',
		description:
			'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
		image:
			"https://images.unsplash.com/photo-1594286851359-8e5a51b36bba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFjYW50JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 12500,
		location: 'Cotswolds',
		country: 'United Kingdom',
	},
	{
		title: 'Brownstone in Boston',
		description:
			'Step back in time in this elegant historic brownstone located in the heart of Boston.',
		image:
			"https://media.istockphoto.com/id/1239956283/photo/unfurnished-cozy-bedroom-with-wooden-wall-and-window.jpg?s=612x612&w=0&k=20&c=J-ZJvPsh_-zljAP4GLEaznKHv0_-kpDq9xMeLg7W9jw=",
		price: 2200,
		location: 'Boston',
		country: 'United States',
	},
	{
		title: 'Beachfront Bungalow',
		description:
			'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
		image:
			"https://images.unsplash.com/photo-1668910251266-081835549c07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYW50JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 1800,
		location: 'Bali',
		country: 'Indonesia',
	},
	{
		title: 'Mountain View Cabin in Banff',
		description:
			'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
		image:
		 "https://media.istockphoto.com/id/2162496231/photo/living-room-interior-with-lcd-tv-set-potted-plant-armchair-and-decorations.jpg?s=612x612&w=0&k=20&c=H0PPCCfkrE9Lbf52bz1ddDGcuePspDgdR4Hst4XIZXA=",
		price: 1500,
		location: 'Banff',
		country: 'Canada',
	},
	{
		title: 'Art Deco Apartment in Miami',
		description:
			'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
		image:
			"https://media.istockphoto.com/id/882088496/photo/modern-vintage-interior-of-living-room-parquet-flooring-and-blue-wall-empty-room-3d-rendering.jpg?s=612x612&w=0&k=20&c=bNQWWrh1qzgc39YljsSR-_CDhUf9ldtCI2XfqczrGQ8=",
		price: 1600,
		location: 'Miami',
		country: 'United States',
	},
	{
		title: 'Tropical Villa in Phuket',
		description:
			'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
		image:
			"https://media.istockphoto.com/id/1158770746/photo/shot-of-a-bright-cozy-modern-apartment-with-big-windows-decorations-and-stylish-furniture.jpg?s=612x612&w=0&k=20&c=OZRNqYtvfJzwPpOK8xoEnh4QY1mABVkMD5tCQ0KCDk4=",
		price: 3000,
		location: 'Phuket',
		country: 'Thailand',
	},
	{
		title: 'Historic Castle in Scotland',
		description:
			'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
		image:
			 "https://plus.unsplash.com/premium_photo-1682093002327-087f25034765?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 4000,
		location: 'Scottish Highlands',
		country: 'United Kingdom',
	},
	{
		title: 'Desert Oasis',
		description:
			'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
		image:
		 "https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		price: 5000,
		location: 'Rajasthan',
		country: 'India',
	},
	{
		title: 'Rustic Cabin',
		description:
			'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
		image:
		 "https://images.unsplash.com/photo-1709805619372-40de3f158e83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 9000,
		location: 'Montana',
		country: 'United States',
	},
	{
		title: 'Beachfront Villa',
		description:
			'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
		image:
			"https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG9zdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
		price: 25000,
		location: 'Mykonos',
		country: 'Greece',
	},
	{
		title: 'Eco-Friendly Retreat',
		description:
			"Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
		image:
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
		price: 1750,
		location: 'Costa Rica',
		country: 'Costa Rica',
	},
	{
		title: 'Historic Cottage',
		description:
			'Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.',
		image:
		    "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhvc3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
		price: 16000,
		location: 'Charleston',
		country: 'United States',
	},
	{
		title: 'Modern Apartment in Tokyo',
		description:
			'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
		image:
			 "https://media.istockphoto.com/id/539811304/photo/interior-of-a-hotel-bedroom.webp?a=1&s=612x612&w=0&k=20&c=k86IkhIN-E8R0O_tVaNXM_23qJmVDtZnnLL0_n_lvXA=",
		price: 2000,
		location: 'Tokyo',
		country: 'Japan',
	},
	{
		title: 'Lakefront',
		description:
			'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
		image:
			"https://images.unsplash.com/photo-1633893737773-af3bcb339e59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
		
		price: 5500,
		location: 'New Hampshire',
		country: 'United States',
	},
	{
		title: 'Luxury Villa',
		description:
			'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
		image:
			"https://plus.unsplash.com/premium_photo-1724061887788-6c90ca9b83d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
		price: 6000,
		location: 'Maldives',
		country: 'Maldives',
	},
	{
		title: 'Aspen',
		description:
			'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
		image:
		 "https://images.unsplash.com/photo-1578898887155-72e9a7da1fb3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
		price: 40000,
		location: 'Aspen',
		country: 'United States',
	},
	{
		title: 'Costa Rica',
		description:
			'Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.',
		image:
		 "https://images.unsplash.com/photo-1600077625345-f401f4ba2fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
		price: 10800,
		location: 'Costa Rica',
		country: 'Costa Rica',
	},
];

module.exports = { data: sampleRooms };
