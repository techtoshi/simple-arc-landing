import { SupportType } from '../../lib/definitions'
import SupportItem from './SupportItem'

const Support = ({
  support: { title, subtitle, items },
}: {
  support: SupportType
}) => {
  return (
    <>
      <div id={title.toLowerCase()} className='flex flex-col items-center'>
        <h3 className='text-xl md:text-2xl lg:text-3xl'>{title}</h3>
        <p className='pt-2 text-sm text-gray-400 uppercase md:text-lg'>
          {subtitle}
        </p>
        <div className='mt-5 max-w-6xl flex justify-center flex-wrap gap-3 md:gap-5'>
          {/* items */}
          {items.map((item) => {
            return <SupportItem key={item.name} item={item} />
          })}
        </div>
      </div>
    </>
  )
}

export default Support
