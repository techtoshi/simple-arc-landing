import { useContext } from 'react'
import { SupportItemType } from '../../lib/definitions'
import { DeviceTypeContext } from '../../lib/DeviceContext'

const SupportItem = ({
  item: { logo, name, link },
}: {
  item: SupportItemType
}) => {
  const isMobile = useContext(DeviceTypeContext)
  return (
    <>
      <a
        href={link}
        target='_blank'
        className={`w-72 py-3 px-4 flex items-center gap-4 rounded-lg bg-[rgba(128,128,128,0.5)] transition active:translate-y-1 active:bg-[rgba(128,128,128,0.3)]
          ${
            !isMobile &&
            'hover:scale-110 hover:bg-[rgba(255,255,255,0.5)] active:scale-100'
          }`}
      >
        <img
          src={logo}
          alt='wallet or market logo'
          className='h-9 rounded-full md:h-10 lg:h-12'
        />
        <p className='text-lg text-atomicals-50 md:text-xl'>{name}</p>
      </a>
    </>
  )
}

export default SupportItem
