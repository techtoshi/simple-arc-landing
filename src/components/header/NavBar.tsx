const NavBar = ({
  tokenName,
  onMenuClick,
}: {
  tokenName: string
  onMenuClick: () => void
}) => {
  return (
    <nav>
      <div className='md:hidden' onClick={onMenuClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-8'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>

      <ul className='hidden text-lg md:flex md:space-x-3 lg:space-x-6 lg:text-xl'>
        <li>
          <a href='#features'>Features</a>
        </li>
        <li>
          <a href='#atomicals'>Atomicals</a>
        </li>
        <li>
          <a href='#ecosystem'>Ecosystem</a>
        </li>
        <li>
          <a
            href='#markets'
            className='btn font-bold uppercase bg-atomicals-400'
          >
            buy {tokenName}
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
