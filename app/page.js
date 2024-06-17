import Image from "next/image";
import styles from "./page.module.css";
import SignIn from "./components/Signin";

export default function Home() {
  return (
    <div className="container">
      <SignIn />
    </div>
  );
}
