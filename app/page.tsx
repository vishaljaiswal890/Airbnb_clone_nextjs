"use client"
import Navbar from "@/components/base/Navbar";
import Cateogories from "@/components/common/Cateogories";
import { Provider } from "react-redux";
import { makeStore } from "./redux/UiStore";

export default function Home() {
  return (
    <Provider store={makeStore}>
      <div>
        <Navbar />
        <Cateogories />
      </div>
    </Provider>
  );
}
