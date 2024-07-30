import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>                  
      <Image
        src="/home.png"
        alt="casas de bairros"
        className={styles.home}
        width={300}
        height={300}
        priority
      />
      <h2>Conectando Pessoas seus bairos</h2>
      <Image
        src="/products.png"
        alt="Curve"
        className={styles.curve}
        width={300}
        height={300}
        priority
      />
      <h2>O que resolvemos?</h2>
      <p>Você se muda para um novo bairro e percebe que precisa de uma lâmpada nova, mas não sabe onde comprar? O Projeto Meu Bairro está aqui para ajudar você! Somos plataforma online que mostra tudo o que está disponível proximo de você.</p>
      <h2>Produtos Locais</h2>
      <Image
        src="/call.png"
        alt="casas de bairros"
        className={styles.home}
        width={300}
        height={300}
        priority
      />
      <p>Com o Meu Bairro será possivel visualizar e pesquisar produtos dentro do seu bairro</p>
      <h2>Serviços Proximo</h2>
      <Image
        src="/home.png"
        alt="casas de bairros"
        className={styles.home}
        width={300}
        height={300}
        priority
      />
      <p>
        Com o Meu Bairro você poderar oferecer seus serviços ou encontrar um profissional proximo a você.
      </p>
      <h2>Federação</h2>
      <Image
        src="/graphics.png"
        alt="casas de bairros"
        className={styles.home}
        width={300}
        height={300}
        priority
      />
      <p>
        Os usuarios do Meu Bairro podem consumir produtos e serviços dos outros bairros atravez o uso de uma rede federada onde o acesso vai ser como pegar um onibus e ir até o outro bairro, mas isso sem precisar sair de casa.
      </p>

    </main>
  );
}
