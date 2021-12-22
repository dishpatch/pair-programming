import logo from "./logo.svg";
import "./App.css";
import { useMediaQuery } from "./useMediaQuery";
import { products } from "./api";

function App() {
  // Using the product data below, build 2 views demonstrating your
  // ability to use React, Html and CSS. Be careful, not all the data has necessarily been
  // entered correctly

  // 1. A product page banner showing at least a photo of the dish and the title and description.
  // People shop for food with their eyes so your design should be responsive.
  // Feel free to use https://www.dishpatch.co.uk/feasts/mee-goreng as inspiration, this is not a design test.

  // 2. standard ecommerce grid layout of product cards featuring and image, title and description
  // along with any other information you want to include. Your grid should be responsive and should
  // collapse down to one card per row on mobile, and 3 per row on desktop.
  // Feel free to use https://www.dishpatch.co.uk/menu as inspiration.

  const isMobile = useMediaQuery("(max-width: 480px)");

  const productData = products;

  return (
    <div className="App">
      <main></main>
    </div>
  );
}

export default App;
