const Donation = () => {
  return (
    <>
      <section>
        <div className='py-10 flex flex-col text-center'>
          <h2>Donation</h2>

          <div className='px-5 flex flex-col items-center gap-2 md:text-lg'>
            <p className='max-w-3xl'>
              Remember to remove this component from source code in your
              production project.
            </p>
            <p className='max-w-3xl'>
              This project is created for all ARC-20⚛️ token communities which
              do not have an official website. You can easily create an ARC-20⚛️
              token official website through this project and let people who are
              interested in the token quickly learn about your community.
            </p>
            <p className='max-w-3xl'>
              I am now a student and have no income, so if you think my project
              will help you build your community, you can choose to donate to
              me. Your generous donation is the motivation for me to make this
              project better.
            </p>

            {/* bitcoin address */}
            <div className='flex flex-col gap-2'>
              <h4>Bitcoin Address:</h4>
              <p className='hidden md:block'>
                bc1p8yghnddmxantdxc95j0sh7eel2lej4z4fpjx4rylndcf0fl94tvsagq579
              </p>
              {/* QR Code */}
              <img
                src='./assets/img/bitcoin-address.jpg'
                alt='bitcoin donation address'
                className='mx-auto w-48 md:w-64'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donation
