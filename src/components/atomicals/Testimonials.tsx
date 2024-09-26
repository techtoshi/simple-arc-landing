import { TestimonialType } from '../../lib/definitions'
import Testimonial from './Testimonial'

const Testimonials = ({
  testimonials,
}: {
  testimonials: TestimonialType[]
}) => {
  return (
    <>
      <div className='px-4 py-6 flex flex-wrap justify-center gap-5'>
        {testimonials.map((testimonial) => {
          return (
            <Testimonial key={testimonial.account} testimonial={testimonial} />
          )
        })}
      </div>
    </>
  )
}

export default Testimonials
