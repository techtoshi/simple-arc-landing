const Logo = ({
  tokenName,
  logoImg,
}: {
  tokenName: string
  logoImg: string
}) => {
  return (
    <>
      <h1>
        <a href='/' className='flex items-center space-x-2'>
          <img
            src={logoImg}
            alt='token logo'
            className='w-8 rounded-full md:w-10'
          />
          <p className='text-2xl font-bold tracking-wider uppercase md:text-3xl'>
            {tokenName}
          </p>
        </a>
      </h1>
    </>
  )
}

export default Logo
