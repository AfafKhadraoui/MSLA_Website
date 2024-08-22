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
let Products = [
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
    }












]
export default Products