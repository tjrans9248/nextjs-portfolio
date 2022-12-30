import Animation from "./animation";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 양석문입니다
          <br className="hidden lg:inline-block" />
          오늘도 공부합니다
        </h1>
        <p className="mb-8 leading-relaxed">
          호텔업계에서 누구보다 가까운 거리에서 사용자와 커뮤니테이션을
          하였으며, 세상에 하나의 티끌같은 편함이라도{" "}
          <strong>제공하기 위해 끊임없는 고민과 학습</strong>이 사용자에게
          편의성을 제공한다는 점에 이끌려 프론트엔드 개발자가 되었습니다.{" "}
          <strong>Gorgeous</strong>한 UI로 사용자에게 WOW 포인트와 긍정적인
          사용자 경험을 제공하는 웹 서비스 개발**을 하는 것이 제 목표이자,
          소망입니다. 개발 프로세스와 개발 문화에 관심이 많아 개선하기 위해 더욱
          발전하고자 꾸준히 노력하고 있습니다.
          <strong>개인의 성장이 팀 전체에 영향을 기여할 때 큰 만족감</strong>을
          느낍니다. 매 순간의 프로젝트마다 주인의식을 가지고 몰두했으며,
          최대치로 끌어 올렸습니다.
          <strong>소통의 중요성, 기록의 중요성</strong>에 대해서 잘 이해하고
          있으며, 이러한 경험들을 토대로 더욱 성장해 갈 것입니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
