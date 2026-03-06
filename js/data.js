// Shared data source for all restaurants
const foodCourtsData = {
    "the-chai-junction": {
        name: "The Chai Junction",
        category: "Cafe & Snacks",
        short_desc: "Best place for tea lovers with snacks and sandwiches.",
        address: "22, Tashkent Marg, Agnipath Colony, Civil Lines, Prayagraj.",
        about: "The Chai Junction offers a cozy atmosphere for tea lovers and those seeking quick, delicious snacks. Known for its variety of teas and freshly made sandwiches.",
        timings: "09:00 AM to 11:00 PM",
        status: "open",
        image: "images/the-chai-junction.jpg",
        menu: [
            { name: "Special Kulhad Chai", desc: "Traditional slow-brewed tea", price: "₹15", size: "" },
            { name: "Masala Maggi", desc: "Spicy and comforting noodles", price: "₹40", size: "" },
            { name: "Grilled Sandwich", desc: "Veggie loaded crispy sandwich", price: "₹60", size: "" },
            { name: "Cold Coffee", desc: "Thick creamy chilled coffee", price: "₹80", size: "" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14411.332305597985!2d81.82173161394541!3d25.46059294528148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985344d18faaf03%3A0x6fb2bb14fb362145!2sCivil%20Lines%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701250123456!5m2!1sen!2sin",
        price_tier: "Starts at ₹10"
    },
    "new-grilled-corner": {
        name: "New Grilled Corner",
        category: "Fast Food",
        short_desc: "Delicious fast food and grilled specialties.",
        address: "190 A/5, near ICICI Bank ATM, Preetam Nagar, Dhoomanganj.",
        about: "New Grilled Corner is a highly-rated fast food restaurant in Prayagraj. We specialize in grilled items, pizzas, and hearty burgers.",
        timings: "05:00 PM to 09:00 PM",
        status: "open",
        image: "images/IMG-20231123-WA0003.jpg",
        menu: [
            { name: "Veg Burger", desc: "Classic vegetable patty with cheese", price: "₹50", size: "" },
            { name: "Paneer Pizza", desc: "Medium size loaded with fresh paneer", price: "₹250", size: "Medium" },
            { name: "Grilled Sandwich", desc: "Triple layered club sandwich", price: "₹80", size: "" },
            { name: "French Fries", desc: "Crispy salted fries", price: "₹60", size: "" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.318850650742!2d81.8152342!3d25.4352136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853503bb54b3fb%3A0xe53cc64c8acfb0f6!2sPreetam%20Nagar%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211011!5e0!3m2!1sen!2sin!4v1701250234567!5m2!1sen!2sin",
        price_tier: "Starts at ₹250"
    },
    "samjhauta-kulhad-cafe": {
        name: "Samjhauta Kulhad Cafe",
        category: "Cafe",
        short_desc: "Authentic Kulhad beverages and quick bites.",
        address: "Infront of style men saloon, Preetam Nagar, Sulem Sarai.",
        about: "Experience the authentic taste of street food served with hygiene and care. Our specialty includes Momos and Kulhad beverages.",
        timings: "11:00 AM to 10:00 PM",
        status: "open",
        image: "images/IMG-20231123-WA0007.jpg",
        menu: [
            { name: "Veg Momos", desc: "Steamed vegetable dumplings", price: "₹40", size: "Plate" },
            { name: "Paneer Roll", desc: "Spiced paneer wrapped in paratha", price: "₹60", size: "" },
            { name: "Kulhad Tea", desc: "Signature tea served in clay cup", price: "₹10", size: "" },
            { name: "Veg Sandwich", desc: "Simple and satisfying", price: "₹30", size: "" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.318850650742!2d81.8152342!3d25.4352136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853503bb54b3fb%3A0xe53cc64c8acfb0f6!2sPreetam%20Nagar%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211011!5e0!3m2!1sen!2sin!4v1701250345678!5m2!1sen!2sin",
        price_tier: "Starts at ₹150"
    },
    "gunjan-dosa-corner": {
        name: "Gunjan Dosa Corner",
        category: "South Indian",
        short_desc: "Authentic South Indian delicacies.",
        address: "179a, Atarsuiya, Kareli, Kalyani Devi, Allahabad.",
        about: "Gunjan Dosa Corner is a fast food restaurant in Prayagraj known for its authentic South Indian flavors. Highly rated for its crispy dosas and rich sambar.",
        timings: "09:00 AM to 11:00 PM",
        status: "open",
        image: "images/2022-01-04.jpg",
        menu: [
            { name: "Masala Dosa", desc: "Crispy crepe filled with potato masala", price: "₹120", size: "Plate" },
            { name: "Idli Sambar", desc: "Steamed rice cakes with lentil soup", price: "₹60", size: "Plate" },
            { name: "Vada Sambar", desc: "Deep fried lentil donuts", price: "₹70", size: "Plate" },
            { name: "Onion Uttapam", desc: "Thick savory pancake with onions", price: "₹100", size: "" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14413.435133379364!2d81.83155!3d25.426297!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI1JzM0LjciTiA4McKwNDknNTMuNiJF!5e0!3m2!1sen!2sus!4v1701248430449!5m2!1sen!2sus",
        price_tier: "Starts at ₹120"
    },
    "biryani-club-cafe": {
        name: "Biryani Club Cafe",
        category: "Restaurant",
        short_desc: "The true taste of slow-cooked authentic Biryani.",
        address: "Manmohan Park, University Road, near Banty book shop, Allahabad.",
        about: "Biryani Club Cafe offers the finest slow-cooked rice and exotic spices. Whether you crave a quick kabab roll or a full plate of biryani, this is the spot.",
        timings: "11:00 AM to 08:30 PM",
        status: "open",
        image: "images/biryani-club-cafe-old-katra-allahabad-food-court-z0bq61wab9.jpg",
        menu: [
            { name: "Veg Biryani", desc: "Flavorful rice cooked with mixed vegetables", price: "₹60", size: "Half" },
            { name: "Veg Biryani", desc: "Flavorful rice cooked with mixed vegetables", price: "₹100", size: "Full" },
            { name: "Kabab Roll", desc: "Succulent kabab wrapped in soft paratha", price: "₹40", size: "" },
            { name: "Paratha", desc: "Freshly baked Indian flatbread", price: "₹20", size: "" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14409.18014329693!2d81.851577!3d25.461822!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI3JzQyLjYiTiA4McKwNTEnMDUuNyJF!5e0!3m2!1sen!2sus!4v1701248430449!5m2!1sen!2sus",
        price_tier: "Starts at ₹350"
    },
    "om-shiv-bhole": {
        name: "Om Shiv Bhole Fast Food",
        category: "Fast Food",
        short_desc: "Your neighborhood spot for tasty fast food.",
        address: "MIG Preetam Nagar Colony, Dhoomanganj, Prayagraj.",
        about: "Om Shiv Bhole Fast Food Corner serves a variety of localized street food and quick snacks perfect for an evening bite.",
        timings: "01:00 PM to 10:00 PM",
        status: "open",
        image: "images/IMG-20231123-WA0005.jpg",
        menu: [
            { name: "Chowmein", desc: "Stir fried noodles with vegetables", price: "₹40", size: "Half" },
            { name: "Manchurian", desc: "Veg balls in spicy dark sauce", price: "₹60", size: "Half" },
            { name: "Fried Rice", desc: "Wok tossed rice with veggies", price: "₹50", size: "Half" },
            { name: "Pav Bhaji", desc: "Spicy vegetable mash with buttered buns", price: "₹60", size: "Plate" }
        ],
        map_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.318850650742!2d81.8152342!3d25.4352136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39853503bb54b3fb%3A0xe53cc64c8acfb0f6!2sPreetam%20Nagar%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211011!5e0!3m2!1sen!2sin!4v1701250345678!5m2!1sen!2sin",
        price_tier: "Starts at ₹12.99"
    }
};
