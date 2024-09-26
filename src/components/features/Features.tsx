import { FeatureType } from '../../lib/definitions'
import Feature from './Feature'

const Features = ({
  tokenName,
  features,
}: {
  tokenName: string
  features: FeatureType[]
}) => {
  return (
    <>
      <section id='features' className='container mx-auto py-14 md:py-20 '>
        <div className='flex flex-col items-center'>
          {/* title */}
          <div className='text-center'>
            <h2>Features</h2>
            <p className='text-lg text-gray-400 italic font-serif md:text-xl lg:text-2xl'>
              What makes{' '}
              <span className='text-xl text-gray-200 md:text-2xl lg:text-3xl'>
                {tokenName}
              </span>{' '}
              unique?
            </p>
          </div>

          {/* features */}
          <div className='max-w-screen-xl mt-5 flex justify-center flex-wrap gap-4 md:mt-8'>
            {features.map(({ title, text }) => {
              return <Feature key={title} title={title} text={text} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
