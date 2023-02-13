import React, { useState } from 'react';

export default function Faqs() {
    const [open,setOpen] = useState(1)
    const HandleOpenFAQ =(id)=>{
        if(open===id){
            setOpen(null)
        }
        setOpen(id)
    }

    return (
        <section className="bg-white ">
            <div className="py-8 px-4 lg:px-12 sm:py-16 ">
                <h2
                    className="mb-6 lg:mb-8 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
                    자주 묻는 질문
                </h2>
                <div className="mx-auto max-w-screen-md">
                    <div id="accordion-flush" data-accordion="collapse"
                        data-active-classes="bg-white text-gray-900"
                        data-inactive-classes="text-gray-500 ">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button"
                                onClick={()=>HandleOpenFAQ(1)}
                                className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 ${open===1 ? 'text-black' : 'text-gray-500 '}`}
                                data-accordion-target="#accordion-flush-body-1" aria-expanded="true"
                                aria-controls="accordion-flush-body-1">
                                <span>다른 의뢰인들과 내용이 중복되지는 않나요?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={open === 1 ? 'block' : 'hidden'  } aria-labelledby="accordion-flush-heading-1">
                            <div className="py-5 border-b border-gray-200 ">
                                <p className="mb-2 text-gray-500 ">모든 이력서 및 커버레터 그리고 자기소개서는 일일히 처음부터 컨설턴트의 영작으로 이루어집니다. 모든 이력서의 내용은 절대 중복되지 않으며 혹시 모를 중복에 대비하여 의뢰인에게 전달 전 검사를 철저히 진행 후 전달됩니다.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-2">
                            <button type="button"
                            onClick={()=>HandleOpenFAQ(2)}
                                className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 ${open===2 ? 'text-black' : 'text-gray-500 '}`}
                                data-accordion-target="#accordion-flush-body-2" aria-expanded="false"
                                aria-controls="accordion-flush-body-2">
                                <span>운영 및 상담 시간이 어떻게 되나요?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-2" className={open === 2 ? 'block' : 'hidden'  } aria-labelledby="accordion-flush-heading-2">
                            <div className="py-5 border-b border-gray-200 ">
                                <p className="mb-2 text-gray-500 ">
                                    외국계 기업은 상시 채용 공고가 있기 때문에 의뢰건이 주말/휴일 가리지 않고 있기 때문에 이지레쥬메의 운영 시간은 연중 무휴 입니다.
                                    평일의 경우 : 오전 10시 ~ 오후 10시 상담이 가능합니다.
                                    주말의 경우 : 오전 10시 ~ 오후 2시 상담이 가능합니다.
                                    상담 시간 이후에 접수된 상담 및 의뢰건의 경우 다음날 아침에 연락드립니다.</p>
                            </div>
                        </div>
                        <h2 id="accordion-flush-heading-3">
                            <button type="button"
                            onClick={()=>HandleOpenFAQ(3)}
                                className={`flex justify-between items-center py-5 w-full font-medium text-left border-b border-gray-200 ${open===3 ? 'text-black' : 'text-gray-500 '}`}
                                data-accordion-target="#accordion-flush-body-3" aria-expanded="false"
                                aria-controls="accordion-flush-body-3">
                                <span>완성본을 받은 후 수정이 가능하나요?</span>
                                <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-3" className={open === 3 ? 'block' : 'hidden'  } aria-labelledby="accordion-flush-heading-3">
                            <div className="py-5 border-b border-gray-200 ">
                                <p className="mb-2 text-gray-500 ">보통 모든 상담 내용은 기록되어 컨설턴트가 첨삭 진행 시 사용됩니다. 혹여 완성물에 상담 및 요청 내용이 누락되거나 컨설턴트의 실수로 잘못 기입된 경우에만 수정이 가능하며, 이외의 단순 수정 요청은 1회 수정이 가능합니다.</p>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
