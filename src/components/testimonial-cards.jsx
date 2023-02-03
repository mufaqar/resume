import Link from 'next/link'
import React from 'react'

export default function Testimonial_cards() {
    return (
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
                            <p className="my-4">다른 업체에서 영어 이력서 제작 커버레터 번역을 맡겼었는데 파파고로 그대로 번역을 하고 잠수를 타는 바람에 정말 골머리를 앓는 도중 마지막으로 동앗줄 잡는 심정으로 이지레쥬메에 상담 요청을 했습니다. 일단 상담사님! 질문이 정말 많았는데도 하나하나 잘 답변해주셔서 감사했습니다. 또 그런 일이 발생할까봐 불안해서 이것저것 문의를 많이 드렸는데 전부 반영해주시고, 무엇보다 첨삭가, 번역가님의 영어 실력이 너무 출중하셔서 미국에서 대학을 졸업한 저도 제 영어 실력이 부끄러워질 정도였습니다. 최종 합격하는데 많은 도움이 된 것 같아요 ㅎㅎ 앞으로도 번역 요청 많이 드리도록 하겠습니다!</p>
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
                <div className="text-center">
                    <Link href="#"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                            더 많은 리뷰 보러가기
                        </Link>
                </div>
            </div>
        </section>
    )
}
