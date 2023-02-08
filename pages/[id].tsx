import { db } from "../firebase-config";
import Head from "next/head";

export default function ({ id }: { id: string }) {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <h2 className="front">404 - {id} Not found</h2>
      <h2 className="back">404 - {id} Not found</h2>
      <p>The URL is wrong or misstyped.</p>
      <a
        className="badge"
        href="https://github.com/LisandroMarcho/licho.tk"
        target="_blank"
      >
        <img
          src="https://img.shields.io/badge/Code-GitHub-%23117a65"
          alt="Repository badge"
        />
      </a>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id }: { id: string } = params;
  const docSnap = await db.collection("shorts").doc(id).get();

  if (docSnap.exists) {
    const docData = docSnap.data();

    return {
      redirect: {
        permanent: true,
        destination: docData.url,
      },
      props: {},
    };
  }

  return {
    props: {
      id,
    },
  };
}
