//your code here
onst mainImage = document.getElementById("main-image");
const price = document.getElementById("apple-price");
const benefits = document.getElementById("apple-benefits");

// Mapping for apple details
const appleDetails = {
  green: {
    img: "https://via.placeholder.com/300/00FF00",
    price: "$6.50",
    benefits: "Green apples are low in sugar and rich in dietary fiber, promoting better digestion."
  },
  yellow: {
    img: "https://via.placeholder.com/300/FFFF00",
    price: "$7.00",
    benefits: "Yellow apples have a sweet taste and are packed with antioxidants for a healthy immune system."
  },
  orange: {
    img: "https://via.placeholder.com/300/FFA500",
    price: "$7.75",
    benefits: "Orange apples are rare and offer a unique flavor along with Vitamin C for skin health."
  },
  red: {
    img: "https://via.placeholder.com/300/FF0000",
    price: "$7.93",
    benefits: "Red apples are classic, juicy, and rich in antioxidants for overall health."
  }
};

// Update main image, price, and benefits on thumbnail click
document.querySelectorAll(".photo-album img").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const color = thumbnail.getAttribute("data-color");
    const details = appleDetails[color];
    mainImage.src = details.img;
    price.textContent = details.price;
    benefits.textContent = details.benefits;
  });
});
