import { HeroType } from '../../lib/definitions'

import Info from './Info'

const Hero = ({
  tokenName,
  hero: { slogan, briefIntro, heroImg, infos },
}: {
  tokenName: string
  hero: HeroType
}) => {
  return (
    <>
      <section
        id='hero'
        className='mx-auto pt-10 bg-starry-sky bg-center bg-cover md:pt-20'
      >
        <div className='flex flex-col-reverse items-center font-mono bg-gradient-to-b from-transparent to-black md:flex-row'>
          {/* hero image */}
          <div className='mt-10 flex justify-center items-center md:w-1/2 md:mt-0'>
            <img
              src={heroImg}
              alt='Hero section image'
              className='animate-fadeIn'
            />
          </div>

          {/* hero text */}
          <div className='mx-5 flex flex-col space-y-2 md:w-5/12 md:mx-0 lg:space-y-6 animate-moveLeft'>
            {/* token slogan */}
            <h2 className='text-4xl font-bold leading-tight md:text-5xl md:leading-none lg:text-6xl lg:leading-tight'>
              {tokenName.toUpperCase()}: <br />
              {slogan}
            </h2>

            {/* brief introduction */}
            <p className='leading-5 text-gray-300 md:text-lg md:leading-6 lg:text-xl'>
              {briefIntro}
            </p>

            {/* buy token btn */}
            <div className='pt-5'>
              <a
                href='#market'
                className='inline-block py-2 px-4 text-lg font-bold tracking-widest uppercase rounded-xl bg-atomicals-400 md:py-3 md:px-6 md:text-xl lg:text-2xl hover:animate-pulse'
              >
                buy {tokenName}
              </a>
            </div>

            {/* token info */}
            <div className='pt-4 flex flex-wrap items-center gap-x-10'>
              {infos.map(({ title, data }) => {
                return <Info key={title} title={title} data={data} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
