import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>licho.tk - url shortener</title>
      </Head>

      <h1 className="front">licho.tk</h1>
      <h1 className="back">licho.tk</h1>
      <p>
        Made with ☕ by
        <a href="https://marchionni.ml" target="_blank">
          Lisandro Marchionni
        </a>
      </p>
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

export default HomePage;
