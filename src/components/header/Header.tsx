import { useState } from 'react'

import Logo from './Logo.tsx'
import NavBar from './NavBar.tsx'
import MobileNav from './MobileNav.tsx'

const Header = ({
  tokenName,
  logoImg,
}: {
  tokenName: string
  logoImg: string
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => setMenuOpen(true)
  const handleCloseClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className='h-14 mx-auto px-2 flex items-center sticky top-0 font font-mono bg-cover md:h-20 md:px-6'
        style={{ backgroundImage: 'url("assets/img/hero-section-bg.jpg")' }}
      >
        <div className='w-full flex justify-between items-center'>
          <Logo logoImg={logoImg} tokenName={tokenName} />

          <NavBar tokenName={tokenName} onMenuClick={handleMenuClick} />
          {menuOpen && (
            <MobileNav
              tokenName={tokenName}
              onCloseMobileNav={handleCloseClick}
            />
          )}
        </div>
      </header>
    </>
  )
}

export default Header
