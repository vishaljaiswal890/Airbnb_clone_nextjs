"use client";
import Navbar from "@/components/base/Navbar";
import { Provider } from "react-redux";
import Cateogories from "@/components/common/Cateogories";
import { makeStore } from "./redux/UiStore";
import SplashScreen from "@/components/SplashScreen";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";


export default function Home() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    try {
      const retrievedToken = Cookies.get("token");
      console.log("Retrieved Token:", retrievedToken);
      if (retrievedToken) {
        setToken(retrievedToken);
      } else {
        console.log("Token not found in cookies.");
        // Log all cookies to console for further inspection
        console.log("All Cookies:", document.cookie);
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  }, []);

  return (
    <Provider store={makeStore}>
      {token ? (
        <SplashScreen token={token} />
      ) : (
        <div>
          {/* Render the Home component */}
          <Navbar />
          <Cateogories />
          {/* Add other content for the Home page */}
        </div>
      )}
    </Provider>
  );
}
