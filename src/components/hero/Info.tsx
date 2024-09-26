const Info = ({ title, data }: { title: string; data: string }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h3 className='font-sans uppercase text-gray-400 lg:text-lg'>
          {title}
        </h3>
        <p className='mt-1 text-4xl font-bold lg:text-5xl'>{data}</p>
      </div>
    </>
  )
}

export default Info
