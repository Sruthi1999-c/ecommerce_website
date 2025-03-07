# 🛍️ eCommerce Website

Welcome to the **eCommerce Website** repository! This project is a simple yet fully functional eCommerce platform built using **React.js**, **Redux**, and **Material UI (MUI)**, integrated with the **Fake Store API** for product data. 💻🚀

## 📌 Features
- 🛒 **Product Listing** – Browse through a variety of products fetched from the Fake Store API.
- 🔍 **Product Details** – View detailed information about each product.
- ➕ **Add to Cart** – Easily add products to your shopping cart.
- 🛍️ **Cart Management** – Modify quantity or remove items from the cart.
- 💰 **Payment Methods** – Supports Google Pay, PhonePe, and Cash on Delivery (COD).
- 🏠 **Address Section** – Save and use a shipping address.
- ✅ **Checkout & Order Summary** – Complete the purchase and view order details.

## 🚀 Tech Stack
- **Frontend:** React.js, Redux, Material UI (MUI)
- **State Management:** Redux Toolkit
- **API Integration:** Fake Store API
- **Styling:** MUI components with custom styles
- **Analytics:** Google Analytics (GA4)

## 📂 Folder Structure
```
📦 ecommerce_website
├── 📂 src
│   ├── 📂 pages        # Main pages (Product List, Cart, Payment, etc.)
│   ├── 📂 Hooks        # Reusable Hooks.
│   ├── 📂 redux        # Redux store, slices for cart & payments
│   ├── 📜 App.js       # Main app component
│   ├── 📜 index.js     # Entry point
├── 📜 package.json     # Project dependencies
├── 📜 README.md        # Documentation (this file)
```

## 🛠️ Installation & Setup

### **🔹 Prerequisites**
Make sure you have the following installed:
- **Node.js** (Latest LTS recommended)
- **npm** 

### **🔹 Steps to Install**
```sh
# Clone the repository
git clone https://github.com/Sruthi1999-c/ecommerce_website.git

# Navigate to the project folder
cd ecommerce_website

# Install dependencies
npm install
```

### **🔹 Running the Application**
```sh
npm start 
```
This will start the development server. Open **http://localhost:3000** in your browser to see the app in action. 🚀

## 📦 API Used
This project fetches data from the **Fake Store API**:  
🔗 [https://fakestoreapi.com/]

🌟 Features


🛒 Shopping & Cart
Browse products from the Fake Store API.
Add or remove items from the cart.
View cart details and total price.


💳 Checkout & Payment
Supports multiple payment methods:
✅ Google Pay
✅ PhonePe
✅ Cash on Delivery (COD)
Enter and save your shipping address.
Secure order placement.


📢 User Experience
Responsive Design (mobile-friendly UI).
Optimized Performance using:
React.memo for cart items.
Lazy Loading for components.
Material-UI Styling for a clean, modern look.




