import LayOut from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
export default function Projects() {
  return (
    <LayOut>
      <Head>
        <title>션 포트폴리오</title>
        <meta name="description" content="오늘도 지식을 쌓자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>프로젝트</h1>
    </LayOut>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  // console.log(result);

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: {},
  };
}

// "title": [
//   {
//       "type": "text",
//       "text": {
//           "content": "션 프로젝트",
//           "link": null
//       },
//       "annotations": {
//           "bold": false,
//           "italic": false,
//           "strikethrough": false,
//           "underline": false,
//           "code": false,
//           "color": "default"
//       },
//       "plain_text": "션 프로젝트",
//       "href": null
//   }
// ]
