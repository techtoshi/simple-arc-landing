import { TestimonialType } from '../../lib/definitions'
import Testimonials from './Testimonials'

const img = './assets/img/atomicals-protocol.jpg'

const Atomicals = ({
  atomicals: { testimonials },
}: {
  atomicals: { testimonials: TestimonialType[] }
}) => {
  return (
    <>
      <section
        id='atomicals'
        className='bg-right bg-no-repeat md:bg-center md:bg-cover'
        style={{ backgroundImage: 'url("assets/img/atomicals-with-logo.jpg")' }}
      >
        {/*  */}
        <div className='bg-gradient-to-b from-black via-transparent to-black'>
          <div className='py-14 flex flex-col items-center md:py-20'>
            <h2>Atomicals Protocol</h2>

            {/* what atomicals protocol is */}
            <div className='my-4 flex flex-col justify-center items-center gap-5 md:my-10 md:flex-row lg:w-4/5'>
              <p className='px-4 md:w-3/5 md:px-10 lg:p-0 lg:w-2/3 lg:text-2xl'>
                The Atomicals Protocol is a simple, yet flexible protocol for
                minting, transferring and updating digital objects
                (traditionally called non-fungible tokens) for unspent
                transaction output (UTXO) blockchains such as Bitcoin. An
                Atomical (or "atom") is a way to organize the creation, transfer
                and updates of digital objects – it is essentially a chain of
                digital ownership defined according to a few simple rules.
              </p>
              <div className='mt-5 md:mt-0 md:w-2/5 lg:w-1/3'>
                <img src={img} alt='atomicals protocol' />
              </div>
            </div>

            {/* testimonials */}
            <Testimonials testimonials={testimonials} />

            {/* learn more */}
            <div className='flex flex-col items-center gap-5 lg:flex-row lg:gap-10'>
              <span className='text-xl text-gray-300 font-bold uppercase md:text-2xl lg:text-3xl'>
                More about:
              </span>
              <a
                href='https://atomicals-community.github.io/atomicals-guide/'
                target='_blank'
                className='py-3 px-6 rounded-lg text-lg font-bold text-atomicals-950 bg-white md:text-xl transition hover:bg-gray-200 hover:-translate-y-2 hover:scale-105'
              >
                Atomicals Guide &#10141;
              </a>
              <a
                href='https://www.atomicals.space/'
                target='_blank'
                className='py-3 px-6 rounded-lg text-lg font-bold text-atomicals-950 bg-atomicals-100 md:text-xl transition hover:bg-atomicals-200 hover:-translate-y-2 hover:scale-105'
              >
                Atomicals Space &#10141;
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Atomicals
