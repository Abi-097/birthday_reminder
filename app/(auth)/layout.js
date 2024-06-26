import { Inter } from "next/font/google";
import "../globals.css";
import ToastContext from "../components/common/ToastContext";
import Provider from "../components/common/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wish App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToastContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
