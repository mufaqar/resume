import Cta from "@/components/cta";
import Link from "next/link";
import React from "react";

const ReviewModule = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 md:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
              이지레쥬메 고객 리뷰
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
              개인정보를 제외한 이지레쥬메 고객의 리뷰를 그대로 담았습니다.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  지방대 출신, 연수 경험없이 외국계 대기업 다수 합격
                </h3>
                <p className="my-4">
                  제 블로그에도 이지레쥬메에 대한 리뷰를 자세히 작성했지만, 간단하게 추천글을 적어보고자 합니다! 지방대 출신에 어학연수 경험 하나 없었던 제가 외국계 대기업, 해외 취업에 성공을 했고 이후 이직에도 정말 큰 도움이 됬습니다. 제 직무가 마케팅 중에서도 세부 분야이고 IT 직무 와도 겹치기 때문에 첨삭가님들이 직무 이해가 힘들 수도 있을 거라고 생각했는데 마케팅, IT 전문 첨삭가님께서 제가 원하는 방향으로 제작해주셨고, 한 군데 빼고 모두 서류 합격을 할 수 있었습니다. 주변 한국, 외국인 친구들에게도 추천했을 정도로 만족했습니다. 감사합니다 :)
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium text-left">
                  <div>정OO</div>
                  <div className="text-sm font-light text-gray-500">
                    틱톡, 아고다, Dell 등 외국계 대기업 다수 합격
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900">
                  빠르고 정확한 아카테믹 번역
                </h3>
                <p className="my-4">
                  정신없이 빠듯한 기한으로 부탁드렸는데 … 이지레쥬메 진짜 최고인것 같습니다 …. 저의 전문적 지식이 포함되어야하는 자기소개서, 그리고 프로젝트 제안서 두가지 모두 정확하게 이해하시고 정확하게 번역해주셨습니다 ! 더 좋은 아이디어도 주시고 더 돋보일수 있도록 풍성하게 작성하여 주셔서 감사합니다 ☺️ 완전 꼼꼼하시고 완벽한 작업 감동적이었어요 😊 앞으로 무조건 이지레쥬메와 작업할것 같습니다 ! 선생님 감사합니다 !
                  완전 최고 !! 👍👍👍 저 앞으로도 많이 부탁드려도 되죠?^^
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium  text-left">
                  <div>이OO</div>
                  <div className="text-sm font-light text-gray-500">
                    예체능
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  다른 곳에서 망친 이력서, 성공적으로 복구 완료
                </h3>
                <p className="my-4">
                  다른 업체에서 영어 이력서 제작 커버레터 번역을 맡겼었는데 파파고로 그대로 번역을 하고 잠수를 타는 바람에 정말 골머리를 앓는 도중 마지막으로 동앗줄 잡는 심정으로 이지레쥬메에 상담 요청을 했습니다. 일단 상담사님! 질문이 정말 많았는데도 하나하나 잘 답변해주셔서 감사했습니다. 또 그런 일이 발생할까봐 불안해서 이것저것 문의를 많이 드렸는데 전부 반영해주시고, 무엇보다 첨삭가, 번역가님의 영어 실력이 너무 출중하셔서 미국에서 대학을 졸업한 저도 제 영어 실력이 부끄러워질 정도였습니다. 최종 합격하는데 많은 도움이 된 것 같아요 ㅎㅎ 앞으로도 번역 요청 많이 드리도록 하겠습니다!
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium  text-left">
                  <div>박OO</div>
                  <div className="text-sm font-light text-gray-500 ">글로벌 VC 기업</div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  박사 지원용 서류, 추천서 번역 모두 한번에 해결
                </h3>
                <p className="my-4">
                  미국 대학 의학 박사 지원을 위한 CV 제작을 위해 처음으로 영어 이력서 제작 서비스를 이용했었습니다. 번역 실력과 전문 용어에 대한 실력이 출중하셔서 매우 만족하였고, 자기소개서, 인터뷰, 추천서 번역도 2차로 의뢰드렸습니다.
                  이후 박사 과정에 최종 합격하였고 재학중 꾸준히 일반 번역 및 첨삭 서비스를 이용하고 있습니다.
                  각 전문 분야에 대한 지식이 있으신 첨삭가, 번역가분들을 매치해주셔서 그런지 너무나도 번역 완성도가 훌륭합니다. 저만의 번역 및 첨삭가가 있는 느낌입니다.
                  다시 한번 감사드립니다.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium text-left">
                  <div>이OO</div>
                  <div className="text-sm font-light text-gray-500">의사, 의학 박사</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <figure className="justify-center mt-20 flex items-center">
        <img src="/svg/qoute.svg" alt="qoute" />
      </figure>
      <h2 className="mt-8 max-w-2xl font-inter text-center mx-auto font-semibold text-2xl px-4">
        ATS라는 것을 이번 이지레쥬메와 채용 준비하면서 처음 알게 되었습니다. 많이 배웠고, 어떤식으로 작동하는지 잘 설명해주셔서 나중에 이직을 하거나 다른 포지션에 지원할 때 참고해서 공고 맞춤형으로 제작할 수 있는 능력이 생긴 것 같습니다. 감사합니다!
      </h2>
      <p className="text-gray-400 font-inter text-center mt-3">
        <strong className="text-black">비공개 / </strong> Machine Learning Engineer
      </p>

      <section className="bg-white">
        <div className="py-8 px-4 text-center lg:py-16 lg:px-12">
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  자연스럽고 의미 전달이 명확한 자소서 추천서 번역
                </h3>
                <p className="my-4">
                  저도 나름 미국에서 유학생활을 오래했었는데, 번역가님실력에는 한참 미치지 못하네요 ㅠㅠ 너무나도 자연스럽고 의미도 정확하게 잘 전달해서 번역해 주셔서 이직할때마다, 평생 이 추천서, 자기소개서를 잘 쓸 수 있을 것 같습니다. 다른데에서 어설프게 번역 하고 다시 재번역 할 바에 확실하게 번역 서비스를 이용하시는 것을 추천합니다.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium text-left">
                  <div>이OO</div>
                  <div className="text-sm font-light text-gray-500">
                    외국계 선박회사
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900">
                  채용 공고에 맞춘 이력서 제작
                </h3>
                <p className="my-4">
                  연휴에도 늦은 시간까지 수정 감사드립니다!!! 잘 확인했습니다 새해 복 많이 받으시길 바랍니다! 고맙습니다ㅎㅎ 제가 스펙이 딱 맞아 떨어지지가 않아서, 채용 공고에 맞춤으로 제작하느라고 요청사항이 많아 번거로우셨을텐데 감사했습니다 나중에 좋은 기회로 또 뵈었으면 좋겠습니다 새해 복 많이 받으세요~!♥
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium  text-left">
                  <div>비공개</div>
                  <div className="text-sm font-light text-gray-500">
                    유통
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 ">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  분야별 전문가의 이력서 제작
                </h3>
                <p className="my-4">
                  안녕하세요 이든 컨설턴트님. 제 분야가 개발 직군 중에서도 조금 생소한 분야라서 걱정이 됬었는데 다행히도 이쪽 직군에 대한 지식이 많으셨고, 경력도 있으시더라구요. 첨삭 뿐만 아니라 전화로 선배로서의 커리어 컨설팅까지 해주셔서 정말 감사했습니다. 아직 면접 결과가 나오진 않았지만 다른곳에 지원하더라도 큰 도움이 될 것 같습니다.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium  text-left">
                  <div>비공개</div>
                  <div className="text-sm font-light text-gray-500 ">개발자</div>
                </div>
              </figcaption>
            </figure>
            <figure
              className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 ">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  박사 지원용 서류, 추천서 번역 모두 한번에 해결
                </h3>
                <p className="my-4">
                  미국 대학 의학 박사 지원을 위한 CV 제작을 위해 처음으로 영어 이력서 제작 서비스를 이용했었습니다. 번역 실력과 전문 용어에 대한 실력이 출중하셔서 매우 만족하였고, 자기소개서, 인터뷰, 추천서 번역도 2차로 의뢰드렸습니다.
                  이후 박사 과정에 최종 합격하였고 재학중 꾸준히 일반 번역 및 첨삭 서비스를 이용하고 있습니다.
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <div className="space-y-0.5 font-medium text-left">
                  <div>비공개</div>
                  <div className="text-sm font-light text-gray-500">디지털 마케팅</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <figure className="justify-center mt-16 flex items-center">
        <img src="/svg/qoute.svg" alt="qoute" />
      </figure>
      <h2 className="mt-8 max-w-2xl text-center mx-auto font-semibold text-2xl px-4">
        훌륭한 작업물 정말 감사합니다! 일단 영어 이력서 완성도는 말할 것도 없구요, 제가 생각치 못한 부분까지 추가로 추천 및 작성해 주셔서 취업 컨설팅 받는 느낌이었습니다. 이 가격에 평생 쓸 수 있는 이력서를 제작할 수 있어서 가격 대비 너무 만족합니다. 다른 친구들에게도 추천하겠습니다 :)
      </h2>
      <p className="text-gray-400 font-inter text-center mt-3">
        <strong className="text-black">김OO / </strong> 외항사 승무원
      </p>

      <section className='bg-[#202632] py-24 mt-12'>
        <div className='text-center lg:px-12 px-4'>
          <h2 className='leading-tight md:text-4xl text-3xl font-extrabold text-white text-center max-w-[715px] mx-auto'>
            지금 바로 공고 맞춤형 레쥬메를 제작하세요!
          </h2>
          <p className='text-xl font-normal text-white text-center my-6 max-w-[632px] mx-auto'>
            대학교 취업 센터, 취업 컨설팅 회사를 위한 대량 이력서 제작 서비스
            원어민 원서 전문가 + AI 기술 융합 서비스를 할인된 가격으로 경험하세요.
          </p>
          <Link href="#" className="inline-flex items-center bg-blue-700 justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-none">
            지금 바로 제작하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReviewModule;
