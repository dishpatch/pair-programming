import logo from "./logo.svg";
import "./App.css";
import { useMediaQuery } from "./useMediaQuery";
import { product, products } from "./api";
import { testCleanedProducts } from "./test";

function App() {
  // Using the product data below, complete the following 2 tasks demonstrating your
  // ability to use React, Javascript, Html and CSS.

  // 1. A product page banner showing at least a photo of the dish and the title and description.
  // People shop for food with their eyes so your design should be responsive.
  // Feel free to use https://www.dishpatch.co.uk/feasts/pappardelle-beef-shin-ragu as inspiration, this is not a design test.

  // NB
  // Create React components if you prefer, but you will not be rewarded or penalised on this basis.
  // Inline styling is fine

  const isMobile = useMediaQuery("(max-width: 480px)");
  const productData = product;

  // 2. Data coming from APIs is not always clean or ready to use.
  // Clean up the data coming from our products api, and format it
  // so that our frontend can use it.

  // The format that the frontend is expecting is as follows
  // {
  //   title: "Express Roti",
  //   handle: "express-roti",
  //   description:
  //     "Simply Roti King's most popular Malaysian curries, served with roti canai.",
  //   vendor: "Roti King",
  //   serves: 2,
  //   imageUrl:
  //     "https://www.dishpatch.co.uk/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0265%2F8847%2F9530%2Fproducts%2Fexpress-roti-feast-roti-king-986713.png%3Fv%3D1635239328&w=3840&q=75",
  //   allergens: ["gluten", "nuts"],
  //   dietaries: {
  //     vegetarian: false,
  //     vegan: false,
  //   },
  // };

  // NB
  // Serves should be a number. If there is no value for serves coming from the API, you can assume the value is 2
  // If there is no value for dietaries coming from the API, you can assume that the product is not vegetarian or vegan.

  // const cleanedProducts = products;
  // testCleanedProducts(cleanedProducts);

  return (
    <div className="App">
      <main></main>
    </div>
  );
}

export default App;
