import Link from "next/link";
import { SignInButton } from "../SignInButton/Index";
import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";
import Image from "next/image";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="" />
        <nav>
          <ActiveLink href="/" prefetch activeClassName={styles.active} > 
            <p>Home</p> 
          </ActiveLink>
          <ActiveLink href="/posts" prefetch activeClassName={styles.active}>
            <p>Posts</p> 
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
