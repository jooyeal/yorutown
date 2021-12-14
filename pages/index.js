import Head from "next/head";

export async function getStaticProps() {
  // 파일 시스템, API, DB 데이터와 같은 외부 데이터를 가져온다.
  const data ={}

  // props 의 'key' 값은
  // Home 컴포넌트에 전달될 것이다.
  return {
    props: {}
  }
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>YORUTOWN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
