import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import styles from "./layout.module.css";

export const metadata = {
  title: "Meu Bairro",
  description: "Conectando Pessoas em seus bairos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>                      
            <Image
              src="/logo-mb.svg"
              alt="Meu Bairro logo"
              className={styles.logo}
              width={300}
              height={300}
              priority
            />
            Meu Bairro
          </h1>
          <button>Entrar</button>
        </header>
        {children}
      </body>
    </html>
  );
}
