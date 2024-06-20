import Image from "next/image";
import styles from "./page.module.css";
import Register from "./(auth)/register/page";

export default function Home() {
  return (
    <div className="container">
      <Register />
    </div>
  );
}
