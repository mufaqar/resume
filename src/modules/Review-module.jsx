import React from "react";

const ReviewModule = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="space-y-8 md:grid md:grid-cols-2 md:space-y-0 reviewcard">
            {[1, 2, 3, 4].map((item, i) => {
              return (
                <div className={`p-10 bg-[#F9FAFB] card`}>
                  <h3 class="mb-2 text-xl font-bold text-center dark:text-white">
                    지방대 출신, 연수 경험없이 외국계 대기업 다수 합격
                  </h3>
                  <p class="text-gray-500 text-center dark:text-gray-400">
                    제 블로그에도 이지레쥬메에 대한 리뷰를 자세히 작성했지만,
                    간단하게 추천글을 적어보고자 합니다! 지방대 출신에 어학연수
                    경험 하나 없었던 제가 외국계 대기업, 해외 취업에 성공을 했고
                    이후 이직에도 정말 큰 도움이 됬습니다. 제 직무가 마케팅
                    중에서도 세부 분야이고 IT 직무 와도 겹치기 때문에
                    첨삭가님들이 직무 이해가 힘들 수도 있을 거라고 생각했는데
                    마케팅, IT 전문 첨삭가님께서 제가 원하는 방향으로
                    제작해주셨고, 한 군데 빼고 모두 서류 합격을 할 수
                    있었습니다. 주변 한국, 외국인 친구들에게도 추천했을 정도로
                    만족했습니다. 감사합니다 :)
                  </p>
                  <div className="flex flex-col justify-center mt-10 mx-auto max-w-[280px]">
                    <h3 class="mb-2 text-xl font-bold text-left dark:text-white">
                      지방대
                    </h3>
                    <p>틱톡, 아고다, Dell 등 외국계 대기업 다수 </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <figure className="justify-center mt-20 flex items-center">
        <img src="/svg/qoute.svg" alt="qoute" />
      </figure>
      <h2 className="mt-8 max-w-2xl font-inter text-center mx-auto font-semibold text-2xl">
        ATS라는 것을 이번 이지레쥬메와 채용 준비하면서 처음 알게 되었습니다.
        많이 배웠고, 어떤식으로 작동하는지 잘 설명해주셔서 나중에 이직을 하거나
        다른 포지션에 지원할 때 참고해서 공고 맞춤형으로 제작할 수 있는 능력이
        생긴 것 같습니다. 감사합니다!
      </h2>
      <p className="text-gray-400 font-inter text-center mt-3">
        <strong className="text-black">비공개 </strong> Machine Learning
        Engineer
      </p>
      <section class="bg-white dark:bg-gray-900 mt-16">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="space-y-8 md:grid md:grid-cols-2 md:space-y-0 reviewcard">
            {[1, 2, 3, 4].map((item, i) => {
              return (
                <div className={`p-10 bg-[#F9FAFB] card`}>
                  <h3 class="mb-2 text-xl font-bold text-center dark:text-white">
                    지방대 출신, 연수 경험없이 외국계 대기업 다수 합격
                  </h3>
                  <p class="text-gray-500 text-center dark:text-gray-400">
                    제 블로그에도 이지레쥬메에 대한 리뷰를 자세히 작성했지만,
                    간단하게 추천글을 적어보고자 합니다! 지방대 출신에 어학연수
                    경험 하나 없었던 제가 외국계 대기업, 해외 취업에 성공을 했고
                    이후 이직에도 정말 큰 도움이 됬습니다. 제 직무가 마케팅
                    중에서도 세부 분야이고 IT 직무 와도 겹치기 때문에
                    첨삭가님들이 직무 이해가 힘들 수도 있을 거라고 생각했는데
                    마케팅, IT 전문 첨삭가님께서 제가 원하는 방향으로
                    제작해주셨고, 한 군데 빼고 모두 서류 합격을 할 수
                    있었습니다. 주변 한국, 외국인 친구들에게도 추천했을 정도로
                    만족했습니다. 감사합니다 :)
                  </p>
                  <div className="flex flex-col justify-center mt-10 mx-auto max-w-[280px]">
                    <h3 class="mb-2 text-xl font-bold text-left dark:text-white">
                      지방대
                    </h3>
                    <p>틱톡, 아고다, Dell 등 외국계 대기업 다수 </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <figure className="justify-center mt-20 flex items-center">
        <img src="/svg/qoute.svg" alt="qoute" />
      </figure>
      <h2 className="mt-8 max-w-2xl text-center mx-auto font-semibold text-2xl">
        ATS라는 것을 이번 이지레쥬메와 채용 준비하면서 처음 알게 되었습니다.
        많이 배웠고, 어떤식으로 작동하는지 잘 설명해주셔서 나중에 이직을 하거나
        다른 포지션에 지원할 때 참고해서 공고 맞춤형으로 제작할 수 있는 능력이
        생긴 것 같습니다. 감사합니다!
      </h2>
      <p className="text-gray-400 font-inter text-center mt-3">
        <strong className="text-black">비공개 </strong> Machine Learning
        Engineer
      </p>

      <section class="bg-[#202632] dark:bg-gray-900 mt-32">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md sm:text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">
              Sign up for our newsletter
            </h2>
            <p class="mx-auto mb-8 max-w-2xl font-light text-white md:mb-12 sm:text-xl">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
            <div className="">
              <button
                class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewModule;
