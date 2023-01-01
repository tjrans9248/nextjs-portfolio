import Image from 'next/legacy/image';

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const des = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  return (
    <div className="m-3 bg-slate-400 rounded-md flex flex-col">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="60%"
        layout="responsive"
        objectFit="none"
        quality={100}
      />

      <h1>{title}</h1>
      <h3>{des}</h3>
      <a href={github}>깃허브 바로가기</a>
      <a href={youtube}>유튜브 바로가기</a>
    </div>
  );
}
