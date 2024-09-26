import { SupportType } from '../../lib/definitions'
import Support from './Support'

const Ecosystem = ({
  ecosystem: { supports },
}: {
  ecosystem: { supports: SupportType[] }
}) => {
  return (
    <>
      <section id='ecosystem' className='container mx-auto py-14 md:py-20'>
        <div className='flex flex-col items-center gap-6'>
          <h2>Ecosystem</h2>

          {/* support */}
          {supports.map((support) => {
            return <Support key={support.title} support={support} />
          })}
        </div>
      </section>
    </>
  )
}

export default Ecosystem
