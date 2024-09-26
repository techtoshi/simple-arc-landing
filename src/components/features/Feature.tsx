const Feature = ({ title, text }: { title: string; text: string }) => {
  return (
    <>
      <div className='w-5/6 p-6 flex flex-col justify-start items-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 md:max-w-72'>
        <h3 className='text-lg font-bold text-gray-300 uppercase md:text-xl lg:text-2xl'>
          {title}
        </h3>
        <p className='pt-1 text-lg leading-snug font-mono text-gray-400 md:pt-2 md:text-xl'>
          {text}
        </p>
      </div>
    </>
  )
}

export default Feature
