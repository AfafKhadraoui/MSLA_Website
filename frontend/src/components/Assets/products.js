import women_product1 from "./women/product1.png";
import women_product2 from "./women/product2.png";
import women_product3 from "./women/product3.png";
import women_product4 from "./women/product4.png";
import women_product5 from "./women/product5.png";
import women_product6 from "./women/product6.png";
import women_product7 from "./women/product7.png";
import women_product8 from "./women/product8.png";
import women_product9 from "./women/product9.png";
import women_produc10 from "./women/product10.png";
import women_product11 from "./women/product11.png";
import women_product12 from "./women/product12.png";
import women_product13 from "./women/product13.png";
import women_product14 from "./women/product14.png";

import kids_product1 from "./kids/product1.png";
import kids_product2 from "./kids/product2.png";
import kids_product3 from "./kids/product3.png";
import kids_product4 from "./kids/product4.webp";
import kids_product5 from "./kids/product5.png";
import kids_product6 from "./kids/product6.webp";
import kids_product7 from "./kids/product7.jpg";
import kids_product8 from "./kids/product8.webp";
import kids_product9 from "./kids/product9.webp";
import kids_product10 from "./kids/product10.jpg";
import kids_product11 from "./kids/product11.webp";
import kids_product12 from "./kids/product12.webp";
import kids_product13 from "./kids/product13.webp";
import kids_product14 from "./kids/product14.webp";
import kids_product15 from "./kids/product15.webp";
import kids_product16 from "./kids/product16.webp";
import kids_product17 from "./kids/product17.webp";

// import man_product1 from "./Man/man_product1.jpg";
// import man_product2 from "./Man/man_product2.jpg";
// import man_product3 from "./Man/man_product3.jpg";
// import man_product4 from "./Man/man_product4.jpg";
// import man_product5 from "./Man/man_product5.jpg";
// import man_product6 from "./Man/man_product6.jpg";
// import man_product7 from "./Man/man_product7.jpg";
// import man_product8 from "./Man/man_product8.jpg";
// import man_product9 from "./Man/man_product9.jpg";
// import man_product10 from "./Man/man_product10.jpg";
// import man_product11 from "./Man/man_product11.jpg";
// import man_product12 from "./Man/man_product12.jpg";
// import man_product13 from "./Man/man_product13.jpg";

let Products = [
  //women..........................
  {
    product_id: 1,
    product_name: "Green Floral Print Organza Maxi Dress",
    image: women_product1,
    old_price: 130.0,
    new_price: 110.0,
    category: "Women",
    type: "Dress",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Green", "Floral Print"],
    description:
      "A stunning organza maxi dress featuring a green floral print. This dress is perfect for making a memorable impression at any event.",
    tags: ["maxi dress", "floral", "organza", "green", "Lulus"],
    quantity: 40,
    stocked: true,
  },
  {
    product_id: 2,
    product_name:
      "Simply Dreamy Emerald Green Satin Floral Jacquard Maxi Dress",
    image: women_product2,
    old_price: 105.0,
    new_price: 88.0,
    category: "Women",
    type: "Dress",
    size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Emerald Green"],
    description:
      "A luxurious satin floral jacquard maxi dress in emerald green. This dress offers a sophisticated look with its elegant fabric and floral design.",
    tags: ["maxi dress", "satin", "floral jacquard", "emerald green", "Lulus"],
    quantity: 35,
    stocked: true,
  },
  {
    product_id: 3,
    product_name: "Red Asymmetrical Cutout Halter Maxi Dress",
    image: women_product3,
    old_price: 105.0,
    new_price: 88.0,
    category: "Women",
    type: "Dress",
    size: ["XXS", "XS", "S", "M", "L", "XL"],
    colors: ["Red", "black"],
    description:
      "A striking red maxi dress with an asymmetrical cutout and halter design. This dress is perfect for making a bold statement at any event.",
    tags: ["maxi dress", "asymmetrical", "cutout", "halter", "red", "Lulus"],
    quantity: 30,
    stocked: true,
  },
  {
    product_id: 4,
    product_name: "Classic Elegance Navy Satin Sleeveless Mock Neck Mini Dress",
    image: women_product4,
    old_price: 85.0,
    new_price: 75.0,
    category: "Women",
    type: "Dress",
    size: ["XXS", "XS", "S", "M", "L", "XL"],
    colors: ["Navy"],
    description:
      "A sleek navy satin mini dress with a sleeveless design and mock neck. Perfect for a classic and elegant look.",
    tags: ["mini dress", "satin", "mock neck", "navy", "Lulus"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 5,
    product_name: "Sweet Fave Dark Grey Embroidered Short Sleeve Sweater Top",
    image: women_product5,
    old_price: 70.0,
    new_price: 65.0,
    category: "Women",
    type: "Sweater",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Dark Grey", "Light Blue"],
    description:
      "A cozy dark grey sweater top with embroidered details and short sleeves. Perfect for adding a touch of warmth and style to your wardrobe.",
    tags: ["sweater", "embroidered", "short sleeve", "dark grey", "Lulus"],
    quantity: 25,
    stocked: true,
  },
  {
    product_id: 6,
    product_name:
      "Darling Sophistication Ivory Cable Knit Bow Crew Neck Sweater",
    image: women_product6,
    old_price: 65.0,
    new_price: 55.0,
    category: "Women",
    type: "Sweater",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory"],
    description:
      "An elegant ivory cable knit sweater with a bow detail and crew neck. Ideal for a sophisticated and cozy look.",
    tags: [
      "sweater",
      "cable knit",
      "bow detail",
      "crew neck",
      "ivory",
      "Lulus",
    ],
    quantity: 30,
    stocked: true,
  },
  {
    product_id: 7,
    product_name:
      "Casually Sophisticated Beige Linen Sleeveless Button-Front Top",
    image: women_product7,
    old_price: 50.0,
    new_price: 45.0,
    category: "Women",
    type: "Top",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige"],
    description:
      "A chic beige linen top with a sleeveless design and button-front detail. Perfect for a casual yet sophisticated look.",
    tags: ["linen top", "button-front", "sleeveless", "beige", "Lulus"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 8,
    product_name:
      "Stylish Inclination Beige Mock Neck Knot-Front Sleeveless Top",
    image: women_product8,
    old_price: 45.0,
    new_price: 40.0,
    category: "Women",
    type: "Top",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black"],
    description:
      "A stylish beige sleeveless top with a mock neck and knot-front detail. Ideal for a modern and elegant appearance.",
    tags: ["mock neck", "knot-front", "sleeveless", "beige", "Lulus"],
    quantity: 25,
    stocked: true,
  },

  {
    product_id: 9,
    product_name: "Harley Black Vegan Leather Mini Skirt",
    image: women_product9,
    old_price: 105.0,
    new_price: 88.0,
    category: "Women",
    type: "Skirt",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
    description:
      "A chic black vegan leather mini skirt with a sleek design. Perfect for adding a touch of edge to any outfit.",
    tags: ["mini skirt", "vegan leather", "black", "Lulus"],
    quantity: 15,
    stocked: true,
  },
  {
    product_id: 10,
    product_name: "Ivory Floral Satin Pleated Jacquard Midi Skirt",
    image: women_produc10,
    old_price: 75.0,
    new_price: 60.0,
    category: "Women",
    type: "Skirt",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory"],
    description:
      "An elegant ivory floral satin midi skirt with pleated and jacquard details. Perfect for a sophisticated and stylish look.",
    tags: ["midi skirt", "floral", "satin", "pleated", "ivory", "Lulus"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 11,
    product_name: "Ivory Straight Leg Trouser Pants",
    image: women_product11,
    old_price: 85.0,
    new_price: 65.0,
    category: "Women",
    type: "Pants",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory"],
    description:
      "Sophisticated ivory straight leg trouser pants. Perfect for both professional and casual settings, offering a sleek and elegant look.",
    tags: ["trouser pants", "straight leg", "ivory", "Lulus"],
    quantity: 10,
    stocked: false,
  },
  {
    product_id: 12,
    product_name: "Chic Business Khaki High-Waisted Trouser Pants",
    image: women_product12,
    old_price: 95.0,
    new_price: 75.0,
    category: "Women",
    type: "Pants",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Khaki"],
    description:
      "Stylish khaki high-waisted trouser pants, ideal for business or casual wear. Offers a chic and polished look.",
    tags: ["trouser pants", "high-waisted", "khaki", "Lulus"],
    quantity: 15,
    stocked: true,
  },
  {
    product_id: 13,
    product_name:
      "Totally Poised Black Pinstriped Collared Mini Dress With Pockets",
    image: women_product13,
    old_price: 70.0,
    new_price: 65.0,
    category: "Women",
    type: "Dress",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Pinstriped"],
    description:
      "A stylish black mini dress with pinstripe pattern and pockets. Features a collared design for a polished look.",
    tags: ["mini dress", "pinstriped", "collared", "pockets", "black", "Lulus"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 14,
    product_name:
      "Romantic Reputation White 3D Floral Applique Bodycon Mini Dress",
    image: women_product14,
    old_price: 120.0,
    new_price: 95.0,
    category: "Women",
    type: "Dress",
    size: ["XS", "S"],
    colors: ["White"],
    description:
      "A stunning white bodycon mini dress with 3D floral applique details. Perfect for a sophisticated and romantic look.",
    tags: ["bodycon dress", "floral applique", "white", "Lulus"],
    quantity: 15,
    stocked: true,
  },

  //kids......................

  {
    product_id: 15,
    product_name: "Sunny Daze Summer Dress",
    image: kids_product1,
    old_price: 75.99,
    new_price: 65.99,
    category: "kids",
    type: "Dress",
    size: ["10", "12", "14", "16"],
    colors: ["yellow"],
    description:
      "A cheerful yellow sundress with a tiered skirt. Perfect for warm summer days.",
    tags: ["dress", "yellow", "girls", "casual"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 16,
    product_name: " Floral Fantasy Mini Dress",
    image: kids_product2,
    old_price: 60.99,
    new_price: 53.99,
    category: "kids",
    type: "Dress",
    size: ["10", "12", "14", "16"],
    colors: ["white"],
    description:
      "A vibrant floral mini dress with a flowy silhouette and adjustable straps. Perfect for summer outings.",
    tags: ["dress", "white", "floral", "mini", "summer"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 17,
    product_name: " Little Blossom Black Floral Dress",
    image: kids_product3,
    old_price: 49.99,
    new_price: 39.99,
    category: "kids",
    type: "Dress",
    size: ["10", "12", "14"],
    colors: ["black"],
    description:
      "A charming black floral mini dress for young girls. Perfect for special occasions or everyday wear.",
    tags: ["dress", "black", "floral", "girls", "summer"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 18,
    product_name: "Classic White Tee",
    image: kids_product4,
    old_price: 24.99,
    new_price: 20.99,
    category: "kids",
    type: "t-shirt",
    size: ["10", "12", "14"],
    colors: ["white"],
    description:
      "A timeless white t-shirt, a wardrobe essential for every young girl. Made from soft, breathable cotton, this versatile tee is comfortable and easy to wear.",
    tags: ["t-shirt", "white", "girls", "kids"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 19,
    product_name: " Nike Dri-FIT Kids' Essential T-Shirt",
    image: kids_product5,
    old_price: 19.99,
    new_price: 15.99,
    category: "kids",
    type: "t-shirt",
    size: ["10", "12", "14"],
    colors: ["pink"],
    description:
      " A classic pink Nike t-shirt designed for young girls. Featuring the iconic Swoosh logo and moisture-wicking technology, this comfortable tee is perfect for workouts or everyday wear",
    tags: ["t-shirt", "pink", "nike", "athletic"],
    quantity: 25,
    stocked: true,
  },
  {
    product_id: 20,
    product_name: "Sweet Treats Tee",
    image: kids_product6,
    old_price: 20.99,
    new_price: 15.99,
    category: "kids",
    type: "t-shirt",
    size: ["10", "12", "14"],
    colors: ["white"],
    description:
      "A playful white t-shirt featuring a cute cake design perfect for young girls who love sweets.",
    tags: ["t-shirt", "girls", "kids", "fashion", "casual"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 21,
    product_name: " Puppy Pals Pajama Set",
    image: kids_product7,
    old_price: 20.99,
    new_price: 17.99,
    category: "kids",
    type: "pajama",
    size: ["10", "12", "14", "16"],
    colors: ["pink"],
    description:
      "Aadorable pink pajama set features a playful design with an adorable puppy. designed to make bedtime even more fun",
    tags: ["pink", "pajamas", "girl", "kids", "sleepwear"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 22,
    product_name: " Cozy Gray Pajamas",
    image: kids_product8,
    old_price: 49.99,
    new_price: 39.99,
    category: "kids",
    type: "pajama",
    size: ["10", "12", "14"],
    colors: ["grey"],
    description:
      "A classic pair of gray pajamas perfect for a comfortable night's sleep. Made from soft, breathable fabric, these pajamas are both cozy and stylish.",
    tags: ["grey", "pajamas", "girl", "kids", "sleepwear"],
    quantity: 25,
    stocked: true,
  },
  {
    product_id: 23,
    product_name: "  Sweet Dreams Pink Pajamas",
    image: kids_product9,
    old_price: 24.99,
    new_price: 20.99,
    category: "kids",
    type: "pajama",
    size: ["10", "12", "14"],
    colors: ["pink"],
    description:
      "A simple yet adorable pink pajama set for your little girl. Made from soft, comfortable cotton, these pajamas are perfect for a cozy night's sleep.",
    tags: ["pink", "pajamas", "girl", "kids", "sleepwear"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 24,
    product_name: "Soft Pink Joggers",
    image: kids_product10,
    old_price: 28.99,
    new_price: 24.99,
    category: "kids",
    type: "pant",
    size: ["10", "12", "14", "16"],
    colors: ["pink"],
    description:
      "These cozy pink joggers are perfect for your little girl. Made from a soft, comfortable fabric, they're ideal for lounging around the house or playing outside.",
    tags: ["pink", "pant", "girl", "kids"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 25,
    product_name: "Denim Jeggings",
    image: kids_product11,
    old_price: 20.99,
    new_price: 16.99,
    category: "kids",
    type: "pant",
    size: ["10", "12", "14", "16"],
    colors: ["blue"],
    description:
      "These stylish jeggings are a blend of jeans and leggings, offering the comfort of leggings with the look of jeans.",
    tags: ["jean", "blue", "pant", "girl", "kids"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 26,
    product_name: " Cozy Red Pajamas",
    image: kids_product12,
    old_price: 24.99,
    new_price: 20.99,
    category: "kids",
    type: "pajama",
    size: ["10", "12", "14", "16"],
    colors: ["red"],
    description:
      " These comfortable red pajamas are perfect for your little boy. Made from soft, breathable fabric, they're ideal for a cozy night's sleep.",
    tags: ["red", "pajamas", "boy", "kids", "sleepwear"],
    quantity: 25,
    stocked: true,
  },
  {
    product_id: 27,
    product_name: "Classic Black Skirt",
    image: kids_product13,
    old_price: 29.99,
    new_price: 25.99,
    category: "kids",
    type: "skirt",
    size: ["10", "12", "14", "16"],
    colors: ["black"],
    description:
      "A timeless black skirt, perfect for any young girl's wardrobe. Made from a soft, comfortable fabric, this skirt is versatile and can be dressed up or down.",
    tags: ["skirt", "black", "girls", "kids", "clothing", "fashion", "casual"],
    quantity: 20,
    stocked: true,
  },
  {
    product_id: 28,
    product_name: "Green Pants and White T-Shirt",
    image: kids_product14,
    old_price: 30.99,
    new_price: 27.99,
    category: "kids",
    type: "suit",
    size: ["10", "12", "14", "16"],
    colors: ["green"],
    description:
      "This timeless outfit is perfect for any occasion, from casual outings to more formal events. The green pants are made from durable fabric and feature a classic fit, while the white t-shirt is soft and comfortable.",
    tags: ["suit", "kids", "white", "green", "boy", "casual"],
    quantity: 10,
    stocked: true,
  },

  {
    product_id: 29,
    product_name: "Basic Black Tee",
    image: kids_product15,
    old_price: 23.99,
    new_price: 20.99,
    category: "kids",
    type: "t-shirt",
    size: ["10", "12", "14", "16"],
    colors: ["black"],
    description:
      "A classic black t-shirt, perfect for any young boy's wardrobe. Made from soft, breathable cotton, this versatile tee is comfortable and easy to wear.",
    tags: ["t-shirt", "kids", "black", "boy", "casual"],
    quantity: 30,
    stocked: true,
  },
  {
    product_id: 30,
    product_name: "Bright Orange Tee",
    image: kids_product16,
    old_price: 19.99,
    new_price: 15.99,
    category: "kids",
    type: "t-shirt",
    size: ["10", "12", "14", "16"],
    colors: ["orange"],
    description:
      "A vibrant orange t-shirt, perfect for your little boy's wardrobe. Made from soft, comfortable cotton, this tee is easy to wear and pairs well with jeans, shorts, or sweats.",
    tags: ["t-shirt", "kids", "orange", "boy", "casual"],
    quantity: 10,
    stocked: true,
  },
  {
    product_id: 31,
    product_name: "Casual Beige Shorts",
    image: kids_product17,
    old_price: 20.99,
    new_price: 17.99,
    category: "kids",
    type: "pant",
    size: ["10", "12", "14", "16"],
    colors: ["Beige "],
    description:
      "These comfortable Beige shorts are perfect for warm weather. Made from a lightweight, breathable fabric, they're ideal for playing outside or lounging around.",
    tags: ["short", "kids", "beige", "boy", "casual"],
    quantity: 20,
    stocked: true,
  },
  //man......................
  // {
  //   product_id: 32,
  //   product_name: "Butter Henry 7 Sleeve Tee Shirt",
  //   image: man_product1,
  //   old_price: 38.99,
  //   new_price: 33.24,
  //   category: "man",
  //   type: "Shirt",
  //   size: ["M", "L", "XL"],
  //   colors: ["Navy", "Black", "Charcoal", "Beige", "Sky"],
  //   description:
  //     "The shirt is a casual black long-sleeve pullover with a henley-style neckline featuring three buttons. The fabric is soft and slightly textured, giving it a comfortable and relaxed look. The sleeves are three-quarter length, and the fit is slightly loose, making it suitable for a laid-back, everyday style. ",
  //   tags: [
  //     "Three-Quarter Sleeve Top",
  //     "Henley Shirt",
  //     "Modern Casual",
  //     "Navy",
  //     "Black",
  //     "Charcoal",
  //     "Beige",
  //     "Sky",
  //   ],
  //   quantity: 35,
  //   stocked: true,
  // },
  // {
  //   product_id: 33,
  //   product_name: "Pleats Half Sleeve Shirt Black",
  //   image: man_product2,
  //   old_price: 73.99,
  //   new_price: 73.99,
  //   category: "man",
  //   type: "Shirt",
  //   size: ["M", "L", "XL"],
  //   colors: ["Grey", "Black", "Beige"],
  //   description:
  //     "This short-sleeve button-up shirt features a solid black color with a textured fabric for added style. It has a relaxed fit, standard collar, and a single chest pocket, making it a versatile piece for both casual and semi-formal occasions. ",
  //   tags: [
  //     "Short-Sleeve Shirt",
  //     "Button-Up",
  //     "Textured Fabric",
  //     "Black",
  //     "Casual Wear",
  //     "Modern Style",
  //   ],
  //   quantity: 50,
  //   stocked: true,
  // },
  // {
  //   product_id: 34,
  //   product_name: "Sunshine Linen Half Open Shirt",
  //   image: man_product3,
  //   old_price: 65.99,
  //   new_price: 56.04,
  //   category: "men",
  //   type: "Shirt",
  //   size: ["M", "L", "XL"],
  //   colors: ["Beige", "Navy", "Browen", "Ivory"],
  //   description:
  //     "This long-sleeve pullover shirt comes in a soft beige color, featuring a relaxed fit and minimalist design. It has a small collar with a V-neck opening and a single chest pocket, making it ideal for a casual, comfortable look.",
  //   tags: [
  //     "Long-Sleeve Shirt",
  //     "V-Neck Pullover",
  //     "Beige",
  //     "Casual Wear",
  //     "Minimalist Style",
  //     "Relaxed Fit",
  //   ],
  //   quantity: 45,
  //   stocked: true,
  // },
  // {
  //   product_id: 35,
  //   product_name: "Hi Relax Shirt",
  //   image: man_product4,
  //   old_price: 65.99,
  //   new_price: 56.04,
  //   category: "men",
  //   type: "Shirt",
  //   size: ["M", "L", "XL"],
  //   colors: ["Beige", "Navy", "Gray", "White", "Black", "Mint"],
  //   description: "",
  //   tags: [
  //     "Long-Sleeve Shirt",
  //     "V-Neck Pullover",
  //     "Beige",
  //     "Casual Wear",
  //     "Minimalist Style",
  //     "Relaxed Fit",
  //   ],
  //   quantity: 30,
  //   stocked: true,
  // },
  // {
  //   product_id: 36,
  //   product_name: "Shutter Linen Oversized Shirt",
  //   image: man_product5,
  //   old_price: 58.99,
  //   new_price: 50.34,
  //   category: "men",
  //   type: "Shirt",
  //   size: ["M", "L"],
  //   colors: ["Beige", "Gray", "White", "Sky", "Yellow Green", "Khaki"],
  //   description: "",
  //   tags: [],
  //   quantity: 40,
  //   stocked: true,
  // },
  // {
  //   product_id: 37,
  //   product_name: "Nylon Varsity Jacket Navy",
  //   image: man_product6,
  //   old_price: 58.99,
  //   new_price: 50.34,
  //   category: "men",
  //   type: "Jacket",
  //   size: ["M", "L", "XL", "XXL"],
  //   colors: ["Navy"],
  //   description:
  //     "Elevate your casual wardrobe with this stylish varsity jacket. The jacket features a deep navy body paired with contrasting white leather sleeves, offering a modern twist on a classic design. It includes a ribbed collar, cuffs, and hem for a snug fit, and a snap button front closure for easy wear. Two side pockets with white piping add both functionality and a touch of elegance. The left chest is subtly adorned with a logo, providing brand recognition without overwhelming the sleek design.",
  //   tags: ["varsity jacket", "casual style", "navy jacket"],
  //   quantity: 20,
  //   stocked: true,
  // },
  // {
  //   product_id: 38,
  //   product_name: "Sporty Line Elastic Pants Sky Blue",
  //   image: man_product7,
  //   old_price: 88.99,
  //   new_price: 88.99,
  //   category: "men",
  //   type: "Pants",
  //   size: ["M", "L"],
  //   colors: ["Sky"],
  //   description:
  //     "These light blue sport pants offer a relaxed fit, perfect for both athletic and casual wear. They feature an elastic waistband for a comfortable and secure fit. The pants are made from a lightweight, breathable fabric, ensuring ease of movement and comfort. The straight-cut legs provide a loose silhouette, making them ideal for various activities.",
  //   tags: ["sports pants", "casual style", "sky blue pants"],
  //   quantity: 51,
  //   stocked: true,
  // },
  // {
  //   product_id: 39,
  //   product_name: "Utility Zipper Cargo Pants Light Gray",
  //   image: man_product8,
  //   old_price: 102.99,
  //   new_price: 102.99,
  //   category: "men",
  //   type: "Pants",
  //   size: ["M", "L", "XL"],
  //   colors: ["Light gray"],
  //   description:
  //     "These light gray cargo pants feature a loose fit with multiple large side pockets for a modern, utilitarian look. Made from durable, comfortable fabric, they are ideal for casual wear or outdoor activities. The adjustable waist and ankle drawstrings allow for a customizable fit.",
  //   tags: [
  //     "Cargo Pants",
  //     "Light Gray",
  //     "Utilitarian",
  //     "Casual Wear",
  //     "Outdoor Style",
  //     "Adjustable Fit",
  //   ],
  //   quantity: 43,
  //   stocked: true,
  // },
  // {
  //   product_id: 40,
  //   product_name: "Endus Leather Slippers",
  //   image: man_product9,
  //   old_price: 165.99,
  //   new_price: 142.74,
  //   category: "men",
  //   type: "Pants",
  //   size: ["M", "L"],
  //   colors: ["Black", "White", "Brown"],
  //   description:
  //     "These high-waisted, tailored trousers are crafted from a textured wool blend, making them perfect for cooler weather or formal occasions.  The design features pleats at the front, adding volume and a classic touch to the silhouette. Side pockets blend seamlessly into the fabric, and visible belt loops allow for accessorizing with a belt.",
  //   tags: ["classic style", "belt loops", "high waisted pants"],
  //   quantity: 14,
  //   stocked: true,
  // },
  // {
  //   product_id: 41,
  //   product_name: "Light Beige Double-Breasted Suit Set",
  //   image: man_product10,
  //   old_price: 165.99,
  //   new_price: 142.74,
  //   category: "men",
  //   type: "Suit",
  //   size: ["M", "L", "XL"],
  //   colors: ["Black", "Beige"],
  //   description:
  //     "This light beige suit set features a double-breasted jacket with black buttons and relaxed fit pants. The fabric is smooth and high-quality, making it perfect for formal occasions or a polished casual look. The modern design and neutral color offer a sophisticated, yet effortless style.",
  //   tags: [
  //     "Double-Breasted Suit",
  //     "Light Beige",
  //     "Formal Wear",
  //     "Modern Style",
  //     "Men's Fashion",
  //   ],
  //   quantity: 26,
  //   stocked: true,
  // },
  // {
  //   product_id: 42,
  //   product_name: "Black Relaxed-Fit Suit Set",
  //   image: man_product11,
  //   old_price: 175.99,
  //   new_price: 150.09,
  //   category: "men",
  //   type: "Suit",
  //   size: ["M", "L", "XL"],
  //   colors: ["Black"],
  //   description:
  //     "This black suit set features a double-breasted jacket with a wide lapel and loose, wide-legged pants. The relaxed fit and modern design make it perfect for both formal and casual settings. The combination of black with a simple white t-shirt and gray sneakers creates a contemporary, sophisticated look.",
  //   tags: [
  //     "Black Suit",
  //     "Relaxed Fit",
  //     "Double-Breasted",
  //     "Modern Style",
  //     "Men's Fashion",
  //   ],
  //   quantity: 22,
  //   stocked: true,
  // },
  // {
  //   product_id: 43,
  //   product_name: "Linen Stripe Pattern Double Suit",
  //   image: man_product12,
  //   old_price: 175.99,
  //   new_price: 150.09,
  //   category: "men",
  //   type: "Suit",
  //   size: ["M", "L", "XL"],
  //   colors: ["Beige"],
  //   description:
  //     "Elevate your formal wardrobe with this modern, double-breasted pinstripe suit. The jacket features peak lapels, a six-button front with two functional buttons for closure, and four decorative buttons on the sleeves. It includes a welt pocket on the left chest and flap pockets at the waist, adding a touch of sophistication. The matching trousers have a straight-leg cut, belt loops, and standard front and back pockets, offering a sleek and tailored fit. Crafted from lightweight fabric, this suit is perfect for spring and summer wear, ensuring you stay stylish and comfortable.",
  //   tags: [
  //     "Double Breasted Suit",
  //     "Modern Menswear",
  //     "Modern Style",
  //     "Beige suit",
  //   ],
  //   quantity: 0,
  //   stocked: false,
  // },
  // {
  //   product_id: 44,
  //   product_name: "Big Plaid Navy Double Suit",
  //   image: man_product13,
  //   old_price: 101.64,
  //   new_price: 61.99,
  //   category: "men",
  //   type: "Suit",
  //   size: ["M", "L", "XL"],
  //   colors: ["Navy"],
  //   description:
  //     "This sophisticated double-breasted suit features a classic checkered pattern in shades of blue. The jacket is designed with peak lapels, a six-button front closure, and four-button detail at the cuffs, adding to its refined appearance. The matching trousers complement the structured silhouette of the jacket, creating a cohesive and polished look. Paired with a crisp white shirt and a solid navy tie, this ensemble is perfect for formal occasions or business settings, offering a professional and stylish appearance.",
  //   tags: [
  //     "Double Breasted Suit",
  //     "Formal Attire",
  //     "Professional Outfit",
  //     "Modern Style",
  //     "Men's Fashion",
  //   ],
  //   quantity: 22,
  //   stocked: true,
  // },
];
export default Products;
