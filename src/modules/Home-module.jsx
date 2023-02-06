import Cta from '@/components/cta';
import CustomerLogo from '@/components/customerLogo';
import Faqs from '@/components/faqs';
import Features from '@/components/features';
import Feature_list from '@/components/feature_list';
import HomeBanner from '@/components/homeBanner';
import ImageBox from '@/components/imageBox';
import Pricing_plan from '@/components/pricing_plan';
import Sociol_proof from '@/components/sociol_proof';
import Testimonial_cards from '@/components/testimonial-cards';
import Link from 'next/link';
import React from 'react';
import Mockup from '../../public/images/mockup.png';

const HomeModule = () => {
  return (
    <>
      <HomeBanner />
      <CustomerLogo />
      <section className='py-24 items-center'>
        <div className='lg:px-12 px-4'>
          <div className='mb-16'>
            <h1 className='leading-tight md:text-4xl text-3xl font-extrabold text-center'>
              한국을 포함한 전 세계 고객의 이력서를 제작합니다.
            </h1>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-16 text-center items-center'>
            <Sociol_proof title=" 2534+" content=" 총 제작 레쥬메" link_txt="2022년 10월 기준 *" />
            <Sociol_proof title="12+" content="영미권 원어민 첨삭가" link_txt="미국, 호주, 영국, 캐나다 원어민 *" />
            <Sociol_proof title="23+" content="원서 전문 번역가" link_txt="취업 문서, 유학 문서 전문 *" />
          </div>
          <div className=' text-center mt-8'>
            <Link href="#" className='text-sm font-normal text-center'>
              <span className='text-[#1A56DB]'>*</span> 2022년 10월 기준 데이터입니다. 데이터는 분기 단위로 업데이트 됩니다.
            </Link>
          </div>
        </div>
      </section>
      <section className='py-24 px-4 items-center'>
        <div className='lg:px-12'>
          <ImageBox
            Image_url={Mockup}
            title="프리랜서가 아닌 정규직 전문가가
              직종에 맞추어 매칭됩니다."
            content="높은 책임감 없이 이력서를 제작하고 연락이 두절되는 프리랜서 플랫폼, 투잡, 다른 업체와 달리 이지레쥬메의 모든 전문가들은 프리랜서가 아닌 정규직 계약으로 근무하고 있습니다. 제작부터 수정 과정 까지 고객의 의견이 반영 될 수 있도록 책임 의식을 가지고 제작합니다."
            Link_title="이지레쥬메 소개"
            Custom_class="md:flex-row mb-16" />

          <ImageBox
            Image_url={Mockup}
            title="공고와 FIT 되는 이력서 제작을 위해
             ATS 툴을 직접 구현해서 사용합니다."
            content="이지레쥬메는(자회사 Incutech) 마이크로소프트사가 독점 공급하는 세계 최고의 자연어 처리 (NLP) 인공지능 기술을 레쥬메, 취업 전문 번역 맞춤으로 튜닝하여 채용 공고의 JD에 맞춤으로 Summary를 제작하는 기술을 보유하고 있습니다. 이지레쥬메의 고객들이라면 해당 기능을 최대 5개의 채용 공고에 맞추어 사용하실 수 있습니다."
            Link_title="공고 FIT 기술 확인하기"
            Custom_class="md:flex-row-reverse" />
        </div>
      </section>

      <Features />

      <Testimonial_cards />

      <Pricing_plan />

      <Feature_list />

      <Cta />

      <Faqs />
    </>
  )
}

export default HomeModule