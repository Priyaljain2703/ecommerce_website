export const products = [
  {
    id: 1,
    title: 'iPhone 14',
    category: 'Electronics',
    brand: 'Apple',
    price: 80000,
    image: '/iphone.png',
    rating: 5,
    description: 'The iPhone 14 offers a 6.1-inch Super Retina XDR display, a powerful A15 Bionic chip for fast performance, and advanced dual-camera system for stunning photos and cinematic video. With crash detection, satellite SOS, and iOS updates, it’s a future-ready device with impressive battery life.',
    reviews: [
      { user: 'Priya', comment: 'Amazing performance and battery life!', rating: 5 },
      { user: 'Arjun', comment: 'Best iPhone so far.', rating: 5 }
    ]
  },
  {
    id: 2,
    title: 'Smart TV',
    category: 'Electronics',
    brand: 'Samsung',
    price: 45000,
    image: '/smarttv.jpg',
    rating: 4,
    description: 'This 43-inch Samsung Smart LED TV features 4K Ultra HD resolution, HDR support, and Dolby Audio. Enjoy seamless access to OTT apps like Netflix, Prime Video, and YouTube. Powered by Tizen OS, it offers voice search, screen mirroring, and energy efficiency.',
    reviews: [
      { user: 'Kunal', comment: 'Great screen and sound quality.', rating: 4 },
      { user: 'Meera', comment: 'Worth the price.', rating: 4 }
    ]
  },
  {
    id: 3,
    title: 'Sony Headphones',
    category: 'Electronics',
    brand: 'Sony',
    price: 7000,
    image: '/headphones.png',
    rating: 4,
    description: 'Sony WH-CH710N wireless headphones come with active noise cancellation, 35-hour battery life, and quick charge support. Their lightweight design, cushioned ear cups, and immersive bass make them ideal for long listening sessions.',
    reviews: [
      { user: 'Ravi', comment: 'Excellent bass and comfort.', rating: 4 },
      { user: 'Sneha', comment: 'Battery lasts long.', rating: 5 }
    ]
  },
  {
    id: 4,
    title: 'Dell Laptop',
    category: 'Electronics',
    brand: 'Dell',
    price: 60000,
    image: '/laptop.png',
    rating: 4,
    description: 'The Dell Inspiron 15 packs a 12th Gen Intel i5 processor, 8GB DDR4 RAM, 512GB SSD, and integrated Intel Iris Xe graphics. Ideal for multitasking, coding, and office work, it features a 15.6" Full HD anti-glare display and fast boot times with Windows 11.',
    reviews: [
      { user: 'Manoj', comment: 'Good performance for office work.', rating: 4 }
    ]
  },
  {
    id: 5,
    title: 'Smartwatch',
    category: 'Electronics',
    brand: 'Noise',
    price: 3000,
    image: '/smartwatch.png',
    rating: 3,
    description: 'Noise ColorFit Pro smartwatch offers fitness tracking, heart rate monitoring, sleep analysis, and smart notifications. It features a 1.55-inch HD display, IP68 water resistance, and up to 10 days of battery life—perfect for everyday use',
    reviews: [
      { user: 'Simran', comment: 'Okay for basic use.', rating: 3 }
    ]
  },
  {
    id: 6,
    title: 'Canon DSLR Camera',
    category: 'Electronics',
    brand: 'Canon',
    price: 55000,
    image: '/camera.png',
    rating: 5,
    description: 'The Canon EOS 1500D features a 24.1MP CMOS sensor, DIGIC 4+ image processor, and Full HD video recording. It supports Wi-Fi and NFC connectivity for easy sharing and remote shooting. A perfect entry-level DSLR for hobbyists and creators.',
    reviews: [
      { user: 'Abhishek', comment: 'Perfect for beginners.', rating: 5 }
    ]
  },
  {
    id: 7,
    title: 'Bluetooth Speaker',
    category: 'Electronics',
    brand: 'JBL',
    price: 2500,
    image: '/bluetooth.png',
    rating: 4,
    description: 'JBL Go 3 is a compact yet powerful Bluetooth speaker offering deep bass, IP67 waterproofing, and up to 5 hours of playtime. Its ultra-portable design with a fabric loop makes it great for travel, picnics, and parties.',
    reviews: [
      { user: 'Anita', comment: 'Very handy and loud.', rating: 4 }
    ]
  },
  {
    id: 8,
    title: "Men's T-Shirt",
    category: 'Clothing',
    brand: 'Zara',
    price: 800,
    image: '/mens_tshirt.png',
    rating: 4,
    description: 'Zara’s men’s slim-fit t-shirt is made of 100% premium cotton. Breathable, lightweight, and stylish, it’s ideal for casual wear or layering. Available in multiple colors, it retains shape after multiple washes.',
    reviews: [
      { user: 'Raj', comment: 'Comfortable and fits well.', rating: 4 }
    ]
  },
  {
    id: 9,
    title: "Women's Jeans",
    category: 'Clothing',
    brand: 'Levi\'s',
    price: 2500,
    image: '/womens_jeans.png',
    rating: 4,
    description: 'Levi’s high-rise stretch jeans provide a flattering fit and lasting comfort. Made from a soft cotton blend with elastane, these jeans contour your shape and are perfect for daily or semi-formal wear.',
    reviews: [
      { user: 'Neha', comment: 'Stretch is good and fits nicely.', rating: 4 }
    ]
  },
  {
    id: 10,
    title: 'Jacket',
    category: 'Clothing',
    brand: 'H&M',
    price: 3500,
    image: '/jacket.png',
    rating: 4,
    description: 'H&M’s insulated winter jacket features a water-resistant outer shell, zip-up front, and internal fleece lining. Designed for both fashion and function, it provides warmth without bulk during cold winters.',
    reviews: [
      { user: 'Aman', comment: 'Warm and stylish.', rating: 4 }
    ]
  },
  {
    id: 11,
    title: 'Cotton Kurti',
    category: 'Clothing',
    brand: 'Fabindia',
    price: 1200,
    image: '/cotton_kurti.png',
    rating: 5,
    description: 'Fabindia’s cotton kurti is handcrafted with ethnic prints, side slits, and a breathable fabric. Its relaxed fit and vibrant colors make it a stylish yet comfortable choice for both work and festive occasions.',
    reviews: [
      { user: 'Pooja', comment: 'Loved the print and feel.', rating: 5 }
    ]
  },
  {
    id: 12,
    title: "Men's Sneakers",
    category: 'Clothing',
    brand: 'Nike',
    price: 5000,
    image: '/menSneaker.png',
    rating: 4,
    description: 'These Nike running sneakers combine a mesh upper for breathability with a cushioned EVA midsole for comfort. The rubber outsole ensures grip and stability for athletic and everyday wear.',
    reviews: [
      { user: 'Dhruv', comment: 'Stylish and durable.', rating: 4 }
    ]
  },
  {
    id: 13,
    title: 'Formal Shirt',
    category: 'Clothing',
    brand: 'Van Heusen',
    price: 1800,
    image: '/formalshirt.png',
    rating: 3,
    description: 'Van Heusen’s formal shirt is tailored from a wrinkle-resistant cotton blend. It features a spread collar, full sleeves, and buttoned cuffs—perfect for office meetings or business events.',
    reviews: [
      { user: 'Kishan', comment: 'Good for office meetings.', rating: 3 }
    ]
  },
  {
    id: 14,
    title: 'Wooden Dining Table',
    category: 'Home',
    brand: 'Urban Ladder',
    price: 20000,
    image: '/dinning.jpg',
    rating: 5,
    description: 'Urban Ladder’s six-seater dining table is crafted from solid Sheesham wood with a smooth finish. Designed with durability and elegance in mind, it complements modern interiors and resists daily wear.',
    reviews: [
      { user: 'Sakshi', comment: 'Adds elegance to the dining area.', rating: 5 }
    ]
  },
  {
    id: 15,
    title: 'Sofa Set',
    category: 'Home',
    brand: 'Godrej',
    price: 30000,
    image: '/sofaset.jpg',
    rating: 4,
    description: 'This Godrej Interio 3+2 sofa set offers plush seating, high-resilience foam, and a hardwood frame. Its contemporary design and premium fabric upholstery add a cozy yet stylish touch to your living room.',
    reviews: [
      { user: 'Ajay', comment: 'Very comfortable for the family.', rating: 4 }
    ]
  },
  {
    id: 16,
    title: 'Double Bed',
    category: 'Home',
    brand: 'Pepperfry',
    price: 28000,
    image: '/bed.jpg',
    rating: 4,
    description: 'Pepperfry’s queen-sized bed features engineered wood construction with hydraulic storage. The padded headboard and modern finish make it a functional and aesthetic upgrade for your bedroom.',
    reviews: [
      { user: 'Ritu', comment: 'Good quality and design.', rating: 4 }
    ]
  },
  {
    id: 17,
    title: 'Curtains',
    category: 'Home',
    brand: 'AmazonBasics',
    price: 1200,
    image: '/curtains.jpg',
    rating: 3,
    description: 'AmazonBasics blackout curtains block up to 90% light, reduce noise, and maintain room temperature. Designed for convenience, they include stainless steel grommets for easy hanging and machine washing.',
    reviews: [
      { user: 'Ramesh', comment: 'Basic but effective.', rating: 3 }
    ]
  },
  {
    id: 18,
    title: 'Table Lamp',
    category: 'Home',
    brand: 'Philips',
    price: 900,
    image: '/lamp.jpg',
    rating: 4,
    description: 'Philips’ LED table lamp comes with adjustable brightness levels, a flexible neck, and energy-saving light. It’s ideal for studying, bedside reading, or ambient lighting with minimal glare.',
    reviews: [
      { user: 'Divya', comment: 'Simple and bright.', rating: 4 }
    ]
  },
  {
    id: 19,
    title: 'Wall Art Painting',
    category: 'Home',
    brand: 'Home Centre',
    price: 1500,
    image: '/wallpainting.png',
    rating: 5,
    description: 'This Home Centre canvas painting brings modern abstract art into your space with vibrant colors and textured finish. Lightweight and ready to hang, it becomes a stunning focal point in any room.',
    reviews: [
      { user: 'Tanvi', comment: 'Really enhances my living room.', rating: 5 }
    ]
  },
  {
    id: 20,
    title: 'Floor Rug',
    category: 'Home',
    brand: 'IKEA',
    price: 3000,
    image: '/floor_rug.jpg',
    rating: 4,
    description: 'IKEA’s textured floor rug features a soft polyester blend with anti-slip backing. It adds comfort and warmth to your bedroom or living room while enhancing the overall décor.',
    reviews: [
      { user: 'Sahil', comment: 'Great for winter flooring.', rating: 4 }
    ]
  }
];
