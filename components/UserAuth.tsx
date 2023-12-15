"use client";
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

function UserControl() {
  const { data: session, status } = useSession();

  if (status === "loading") return <span>...</span>;

  if (!session) {
    return (
      <a href="#" onClick={() => signIn("zitadel")}>
        Entrar
      </a>
    );
  }

  return (
    <div>
      {session?.user?.email} (
      <a href="#" onClick={() => signOut()}>
        Salir
      </a>
      )
    </div>
  );
}

export default function UserAuth() {
  return (
    <SessionProvider>
      <UserControl />
    </SessionProvider>
  );
}
