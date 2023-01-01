import LayOut from '../components/layout';
import Head from 'next/head';
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';
export default function Projects({ projects }) {
  console.log(projects);
  return (
    <LayOut className="flex flex-col ">
      <Head>
        <title>션 포트폴리오</title>
        <meta name="description" content="오늘도 지식을 쌓자" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold sm:text-5xl">
        총 프로젝트 : {projects.results.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
        {projects.results.map(item => (
          <ProjectItem key={item.id} data={item} />
        ))}
      </div>
    </LayOut>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-02-22',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  // console.log(projects);

  const projectNames = projects.results.map(
    item => item.properties.Name.title[0].plain_text
  );

  // const allProjects = JSON.parse(JSON.stringify(projectNames));

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
