const MobileNav = ({
  tokenName,
  onCloseMobileNav,
}: {
  tokenName: string
  onCloseMobileNav: () => void
}) => {
  return (
    <>
      <nav className='w-full h-screen absolute top-0 left-0 flex items-center justify-center bg-atomicals-950 md:hidden'>
        <div className='absolute top-2 right-2' onClick={onCloseMobileNav}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-10'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18 18 6M6 6l12 12'
            />
          </svg>
        </div>

        <ul className='w-full flex flex-col items-center space-y-8 text-2xl font-bold uppercase'>
          <li>
            <a href='#features' onClick={onCloseMobileNav}>
              Features
            </a>
          </li>
          <li>
            <a href='#atomicals' onClick={onCloseMobileNav}>
              Atomicals
            </a>
          </li>
          <li>
            <a href='#ecosystem' onClick={onCloseMobileNav}>
              Ecosystem
            </a>
          </li>
          <li>
            <a
              href='#markets'
              onClick={onCloseMobileNav}
              className='btn bg-atomicals-400'
            >
              buy {tokenName}
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileNav
