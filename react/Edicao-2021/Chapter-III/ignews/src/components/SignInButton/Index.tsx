import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

import {signIn, signOut, useSession}  from "next-auth/react";

export function SignInButton() {
  const {data: sessions, status} = useSession();
  console.log(sessions);
  return sessions ? (
    <button className={styles.SignInButton} type='button'>
      <FaGithub color='#04d361' />
      {sessions.user.name}
      <FiX color='#737380' className={styles.closeIcon} onClick={()=>signOut()} />
    </button>
  ) : (
    <button className={styles.SignInButton} type='button' onClick={()=>{signIn("github")}}>
      <FaGithub color='#eba417' />
      Sign in with Github
    </button>
  );
}
