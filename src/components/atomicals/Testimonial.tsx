import { TestimonialType } from '../../lib/definitions'

const Testimonial = ({
  testimonial: { text, img, name, account, link },
}: {
  testimonial: TestimonialType
}) => {
  return (
    <>
      <div className='max-w-md px-6 py-4 flex flex-col gap-5 rounded-md bg-[rgba(128,128,128,0.25)] md:bg-[rgba(0,0,0,0.3)]'>
        <div className='flex items-center gap-4'>
          <img
            src={img}
            alt='social profile picture'
            className='w-10 h-10 rounded-full md:w-12 md:h-12'
          />
          <div>
            <p>{name}</p>
            <a href={link} target='_blank'>
              @{account}
            </a>
          </div>
        </div>
        <blockquote>{text}</blockquote>
      </div>
    </>
  )
}

export default Testimonial
