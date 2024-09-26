import { SupportItemType } from '../../lib/definitions'

const SupportItem = ({
  item: { logo, name, link },
}: {
  item: SupportItemType
}) => {
  return (
    <>
      <a
        href={link}
        target='_blank'
        className='w-72 py-3 px-4 flex items-center gap-4 rounded-lg bg-[rgba(128,128,128,0.5)] transition hover:scale-110 hover:bg-[rgba(255,255,255,0.5)]'
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
