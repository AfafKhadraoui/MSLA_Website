import women_product1 from './women/product1.png'
import women_product2 from './women/product2.png'
import women_product3 from './women/product3.png'
import women_product4 from './women/product4.png'
import women_product5 from './women/product5.png'
import women_product6 from './women/product6.png'
import women_product7 from './women/product7.png'
import women_product8 from './women/product8.png'
import women_product9 from './women/product9.png'
import women_produc10 from './women/produc10.png'
import women_product11 from './women/product11.png'
import women_product12 from './women/product12.png'
import women_product13 from './women/product13.png'
import women_product14 from './women/product14.png'

import kids_product1 from './kids/product1.png'
import kids_product2 from './kids/product2.png'
import kids_product3 from './kids/product3.png'
import kids_product4 from './kids/product4.webp'
import kids_product5 from './kids/product5.png'
import kids_product6 from './kids/product6.webp'
import kids_product7 from './kids/product7.jpg'
import kids_product8 from './kids/product8.webp'
import kids_product9 from './kids/product9.webp'
import kids_produc10 from './kids/produc10.jpg'
import kids_product11 from './kids/product11.webp'
import kids_product12 from './kids/product12.webp'
import kids_product13 from './kids/product13.webp'
import kids_product14 from './kids/product14.webp'
import kids_product15 from './kids/product15.webp'
import kids_product16 from './kids/product16.webp'
import kids_product17 from './kids/product17.webp'


let Products = [
    //women..........................
    {
        "product_id": 1,
        "product_name": "Green Floral Print Organza Maxi Dress",
        "image": women_product1,
        "old_price": 130.00,
        "new_price": 110.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Green", "Floral Print"],
        "description": "A stunning organza maxi dress featuring a green floral print. This dress is perfect for making a memorable impression at any event.",
        "tags": ["maxi dress", "floral", "organza", "green", "Lulus"],
        "quantity": 40,
        "stocked": true
    }
    ,
    {
        "product_id": 2,
        "product_name": "Simply Dreamy Emerald Green Satin Floral Jacquard Maxi Dress",
        "image": women_product2,
        "old_price": 105.00,
        "new_price": 88.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
        "colors": ["Emerald Green"],
        "description": "A luxurious satin floral jacquard maxi dress in emerald green. This dress offers a sophisticated look with its elegant fabric and floral design.",
        "tags": ["maxi dress", "satin", "floral jacquard", "emerald green", "Lulus"],
        "quantity": 35,
        "stocked": true
    },
    {
        "product_id": 3,
        "product_name": "Red Asymmetrical Cutout Halter Maxi Dress",
        "image": women_product3,
        "old_price": 105.00,
        "new_price": 88.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XXS", "XS", "S", "M", "L", "XL"],
        "colors": ["Red", "black"],
        "description": "A striking red maxi dress with an asymmetrical cutout and halter design. This dress is perfect for making a bold statement at any event.",
        "tags": ["maxi dress", "asymmetrical", "cutout", "halter", "red", "Lulus"],
        "quantity": 30,
        "stocked": true
    },
    {
        "product_id": 4,
        "product_name": "Classic Elegance Navy Satin Sleeveless Mock Neck Mini Dress",
        "image": women_product4,
        "old_price": 85.00,
        "new_price": 75.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XXS", "XS", "S", "M", "L", "XL"],
        "colors": ["Navy"],
        "description": "A sleek navy satin mini dress with a sleeveless design and mock neck. Perfect for a classic and elegant look.",
        "tags": ["mini dress", "satin", "mock neck", "navy", "Lulus"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 5,
        "product_name": "Sweet Fave Dark Grey Embroidered Short Sleeve Sweater Top",
        "image": women_product5,
        "old_price": 70.00,
        "new_price": 65.00,
        "category": "Women",
        "type": "Sweater",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Dark Grey", "Light Blue"],
        "description": "A cozy dark grey sweater top with embroidered details and short sleeves. Perfect for adding a touch of warmth and style to your wardrobe.",
        "tags": ["sweater", "embroidered", "short sleeve", "dark grey", "Lulus"],
        "quantity": 25,
        "stocked": true
    }
    , {
        "product_id": 6,
        "product_name": "Darling Sophistication Ivory Cable Knit Bow Crew Neck Sweater",
        "image": women_product6,
        "old_price": 65.00,
        "new_price": 55.00,
        "category": "Women",
        "type": "Sweater",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Ivory"],
        "description": "An elegant ivory cable knit sweater with a bow detail and crew neck. Ideal for a sophisticated and cozy look.",
        "tags": ["sweater", "cable knit", "bow detail", "crew neck", "ivory", "Lulus"],
        "quantity": 30,
        "stocked": true
    },
    {
        "product_id": 7,
        "product_name": "Casually Sophisticated Beige Linen Sleeveless Button-Front Top",
        "image": women_product7,
        "old_price": 50.00,
        "new_price": 45.00,
        "category": "Women",
        "type": "Top",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Beige"],
        "description": "A chic beige linen top with a sleeveless design and button-front detail. Perfect for a casual yet sophisticated look.",
        "tags": ["linen top", "button-front", "sleeveless", "beige", "Lulus"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 8,
        "product_name": "Stylish Inclination Beige Mock Neck Knot-Front Sleeveless Top",
        "image": women_product8,
        "old_price": 45.00,
        "new_price": 40.00,
        "category": "Women",
        "type": "Top",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Beige", "Black"],
        "description": "A stylish beige sleeveless top with a mock neck and knot-front detail. Ideal for a modern and elegant appearance.",
        "tags": ["mock neck", "knot-front", "sleeveless", "beige", "Lulus"],
        "quantity": 25,
        "stocked": true
    }

    ,
    {
        "product_id": 9,
        "product_name": "Harley Black Vegan Leather Mini Skirt",
        "image": women_product9,
        "old_price": 105.00,
        "new_price": 88.00,
        "category": "Women",
        "type": "Skirt",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Black"],
        "description": "A chic black vegan leather mini skirt with a sleek design. Perfect for adding a touch of edge to any outfit.",
        "tags": ["mini skirt", "vegan leather", "black", "Lulus"],
        "quantity": 15,
        "stocked": true
    },
    {
        "product_id": 10,
        "product_name": "Ivory Floral Satin Pleated Jacquard Midi Skirt",
        "image": women_produc10,
        "old_price": 75.00,
        "new_price": 60.00,
        "category": "Women",
        "type": "Skirt",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Ivory"],
        "description": "An elegant ivory floral satin midi skirt with pleated and jacquard details. Perfect for a sophisticated and stylish look.",
        "tags": ["midi skirt", "floral", "satin", "pleated", "ivory", "Lulus"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 11,
        "product_name": "Ivory Straight Leg Trouser Pants",
        "image": women_product11,
        "old_price": 85.00,
        "new_price": 65.00,
        "category": "Women",
        "type": "Pants",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Ivory"],
        "description": "Sophisticated ivory straight leg trouser pants. Perfect for both professional and casual settings, offering a sleek and elegant look.",
        "tags": ["trouser pants", "straight leg", "ivory", "Lulus"],
        "quantity": 10,
        "stocked": false
    },
    {
        "product_id": 12,
        "product_name": "Chic Business Khaki High-Waisted Trouser Pants",
        "image": women_product12,
        "old_price": 95.00,
        "new_price": 75.00,
        "category": "Women",
        "type": "Pants",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Khaki"],
        "description": "Stylish khaki high-waisted trouser pants, ideal for business or casual wear. Offers a chic and polished look.",
        "tags": ["trouser pants", "high-waisted", "khaki", "Lulus"],
        "quantity": 15,
        "stocked": true
    },
    {
        "product_id": 13,
        "product_name": "Totally Poised Black Pinstriped Collared Mini Dress With Pockets",
        "image": women_product13,
        "old_price": 70.00,
        "new_price": 65.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XS", "S", "M", "L", "XL"],
        "colors": ["Black", "Pinstriped"],
        "description": "A stylish black mini dress with pinstripe pattern and pockets. Features a collared design for a polished look.",
        "tags": ["mini dress", "pinstriped", "collared", "pockets", "black", "Lulus"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 14,
        "product_name": "Romantic Reputation White 3D Floral Applique Bodycon Mini Dress",
        "image": women_product14,
        "old_price": 120.00,
        "new_price": 95.00,
        "category": "Women",
        "type": "Dress",
        "size": ["XS", "S"],
        "colors": ["White"],
        "description": "A stunning white bodycon mini dress with 3D floral applique details. Perfect for a sophisticated and romantic look.",
        "tags": ["bodycon dress", "floral applique", "white", "Lulus"],
        "quantity": 15,
        "stocked": true
    },

//kids......................
    
    {
        "product_id": 15,
        "product_name": "Sunny Daze Summer Dress",
        "image": kids_product1,
        "old_price": 75.99,
        "new_price": 65.99,
        "category": "kids",
        "type": "Dress",
        "size": ["10", "12","14","16"],
        "colors": ["yellow"],
        "description": "A cheerful yellow sundress with a tiered skirt. Perfect for warm summer days.",
        "tags": ["dress", "yellow", "girls", "casual"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 16,
        "product_name": " Floral Fantasy Mini Dress",
        "image": kids_product2,
        "old_price": 60.99,
        "new_price": 53.99,
        "category": "kids",
        "type": "Dress",
        "size": ["10", "12","14","16"],
        "colors": ["white"],
        "description": "A vibrant floral mini dress with a flowy silhouette and adjustable straps. Perfect for summer outings.",
        "tags": ["dress", "white", "floral", "mini", "summer"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 17,
        "product_name": " Little Blossom Black Floral Dress",
        "image": kids_product3,
        "old_price": 49.99,
        "new_price": 39.99,
        "category": "kids",
        "type": "Dress",
        "size": ["10", "12","14"],
        "colors": ["black"],
        "description": "A charming black floral mini dress for young girls. Perfect for special occasions or everyday wear.",
        "tags": ["dress", "black", "floral", "girls", "summer"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 18,
        "product_name": "Classic White Tee",
        "image": kids_product4,
        "old_price": 24.99,
        "new_price": 20.99,
        "category": "kids",
        "type": "t-shirt",
        "size": ["10", "12","14"],
        "colors": ["white"],
        "description": "A timeless white t-shirt, a wardrobe essential for every young girl. Made from soft, breathable cotton, this versatile tee is comfortable and easy to wear.",
        "tags": ["t-shirt", "white", "girls", "kids"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 19,
        "product_name": " Nike Dri-FIT Kids' Essential T-Shirt",
        "image": kids_product5,
        "old_price": 19.99,
        "new_price": 15.99,
        "category": "kids",
        "type": "t-shirt",
        "size": ["10", "12","14"],
        "colors": ["pink"],
        "description": " A classic pink Nike t-shirt designed for young girls. Featuring the iconic Swoosh logo and moisture-wicking technology, this comfortable tee is perfect for workouts or everyday wear",
        "tags": ["t-shirt", "pink", "nike", "athletic"],
        "quantity": 25,
        "stocked": true
    },
    {
        "product_id": 20,
        "product_name": "Sweet Treats Tee",
        "image": kids_product6,
        "old_price": 20.99,
        "new_price": 15.99,
        "category": "kids",
        "type": "t-shirt",
        "size": ["10", "12","14"],
        "colors": ["white"],
        "description": "A playful white t-shirt featuring a cute cake design perfect for young girls who love sweets.",
        "tags":  ["t-shirt", "girls", "kids", "fashion", "casual"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 21,
        "product_name": " Puppy Pals Pajama Set",
        "image": kids_product7,
        "old_price": 20.99,
        "new_price": 17.99,
        "category": "kids",
        "type": "pajama",
        "size": ["10", "12","14","16"],
        "colors": ["pink"],
        "description": "Aadorable pink pajama set features a playful design with an adorable puppy. designed to make bedtime even more fun",
        "tags": ["pink","pajamas", "girl", "kids", "sleepwear"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 22,
        "product_name": " Cozy Gray Pajamas",
        "image": kids_product8,
        "old_price": 49.99,
        "new_price": 39.99,
        "category": "kids",
        "type": "pajama",
        "size": ["10", "12","14"],
        "colors": ["grey"],
        "description": "A classic pair of gray pajamas perfect for a comfortable night's sleep. Made from soft, breathable fabric, these pajamas are both cozy and stylish.",
        "tags": ["grey","pajamas", "girl", "kids", "sleepwear"],
        "quantity": 25,
        "stocked": true
    },
    {
        "product_id": 23,
        "product_name": "  Sweet Dreams Pink Pajamas",
        "image": kids_product9,
        "old_price": 24.99,
        "new_price": 20.99,
        "category": "kids",
        "type": "pajama",
        "size": ["10", "12","14"],
        "colors": ["pink"],
        "description": "A simple yet adorable pink pajama set for your little girl. Made from soft, comfortable cotton, these pajamas are perfect for a cozy night's sleep.",
        "tags": ["pink","pajamas", "girl", "kids", "sleepwear"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 24,
        "product_name": "Soft Pink Joggers",
        "image": kids_product10,
        "old_price": 28.99,
        "new_price": 24.99,
        "category": "kids",
        "type": "pant",
        "size": ["10", "12","14","16"],
        "colors": ["pink"],
        "description": "These cozy pink joggers are perfect for your little girl. Made from a soft, comfortable fabric, they're ideal for lounging around the house or playing outside.",
        "tags": ["pink","pant", "girl", "kids"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 25,
        "product_name": "Denim Jeggings",
        "image": kids_product11,
        "old_price": 20.99,
        "new_price": 16.99,
        "category": "kids",
        "type": "pant",
        "size": ["10", "12","14","16"],
        "colors": ["blue"],
        "description": "These stylish jeggings are a blend of jeans and leggings, offering the comfort of leggings with the look of jeans.",
        "tags": ["jean","blue","pant", "girl", "kids"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 26,
        "product_name": " Cozy Red Pajamas",
        "image": kids_product12,
        "old_price": 24.99,
        "new_price": 20.99,
        "category": "kids",
        "type": "pajama",
        "size": ["10", "12","14","16"],
        "colors": ["red"],
        "description": " These comfortable red pajamas are perfect for your little boy. Made from soft, breathable fabric, they're ideal for a cozy night's sleep.",
        "tags":["red","pajamas", "boy", "kids", "sleepwear"],
        "quantity": 25,
        "stocked": true
    },
    {
        "product_id": 27,
        "product_name": "Classic Black Skirt",
        "image": kids_product13,
        "old_price": 29.99,
        "new_price": 25.99,
        "category": "kids",
        "type": "skirt",
        "size": ["10", "12","14","16"],
        "colors": ["black"],
        "description": "A timeless black skirt, perfect for any young girl's wardrobe. Made from a soft, comfortable fabric, this skirt is versatile and can be dressed up or down.",
        "tags": ["skirt", "black", "girls", "kids", "clothing", "fashion", "casual"],
        "quantity": 20,
        "stocked": true
    },
    {
        "product_id": 28,
        "product_name": "Green Pants and White T-Shirt",
        "image": kids_product14,
        "old_price": 30.99,
        "new_price": 27.99,
        "category": "kids",
        "type": "suit",
        "size": ["10", "12","14","16"],
        "colors": ["green"],
        "description": "This timeless outfit is perfect for any occasion, from casual outings to more formal events. The green pants are made from durable fabric and feature a classic fit, while the white t-shirt is soft and comfortable.",
        "tags": ["suit", "kids", "white", "green","boy","casual"],
        "quantity": 10,
        "stocked": true
    },
   
    {
        "product_id": 29,
        "product_name": "Basic Black Tee",
        "image": kids_product15,
        "old_price": 23.99,
        "new_price": 20.99,
        "category": "kids",
        "type": "t-shirt",
        "size": ["10", "12","14","16"],
        "colors": ["black"],
        "description": "A classic black t-shirt, perfect for any young boy's wardrobe. Made from soft, breathable cotton, this versatile tee is comfortable and easy to wear.",
        "tags": ["t-shirt", "kids", "black","boy","casual"],
        "quantity": 30,
        "stocked": true
    },
    {
        "product_id": 30,
        "product_name": "Bright Orange Tee",
        "image": kids_product16,
        "old_price": 19.99,
        "new_price": 15.99,
        "category": "kids",
        "type": "t-shirt",
        "size": ["10", "12","14","16"],
        "colors": ["orange"],
        "description": "A vibrant orange t-shirt, perfect for your little boy's wardrobe. Made from soft, comfortable cotton, this tee is easy to wear and pairs well with jeans, shorts, or sweats.",
        "tags": ["t-shirt", "kids", "orange","boy","casual"],
        "quantity": 10,
        "stocked": true
    },
    {
        "product_id": 31,
        "product_name": "Casual Beige Shorts",
        "image": kids_product17,
        "old_price": 20.99,
        "new_price": 17.99,
        "category": "kids",
        "type": "pant",
        "size": ["10", "12","14","16"],
        "colors": ["Beige "],
        "description": "These comfortable Beige shorts are perfect for warm weather. Made from a lightweight, breathable fabric, they're ideal for playing outside or lounging around.",
        "tags": ["short", "kids", "beige","boy","casual"],
        "quantity": 20,
        "stocked": true
    }
   













]
export default Products