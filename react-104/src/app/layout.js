import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navigation = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Comics',
    path: '/pages/comics'
  },
  {
    name: 'Characters',
    path: '/pages/characters'
  },
  
]

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header navigation={navigation}/>
        {children}
      </body>
    </html>
  );
}