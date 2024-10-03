import { FormSearch } from '../components';
import { HandHelping, Landmark } from 'lucide-react';
import { AllThemesView, SearchThemeView } from '../views';

function Home() {
  return (
    <main className='min-h-screen w-full items-center justify-center px-8 lg:px-32'>
      <section className='flex flex-col mt-20 lg:mt-32'>
        <div className='flex flex-1 flex-row justify-around'>
          <h1 className='text-xl lg:text-5xl lg:w-full font-semibold text-start self-start'>
            Temáticas importantes <br /> de Teoría Polítca
          </h1>
          <Landmark className=' m-auto mr-0 w-14 h-12 lg:w-28 lg:h-28'/>
        </div>
        <FormSearch/>
      </section>
      
      <SearchThemeView/>
                
      <AllThemesView/>

      <section className='flex flex-1 flex-col items-start mt-12 lg:mt-16'>
        <div className='flex flex-row items-center self-start'>
          <HandHelping className='mx-3 w-8 h-8'/>
          <h3 className='text-lg lg:text-3xl font-bold lg:font-semibold'>
            Contribuciones
          </h3>
        </div>
        <div className='flex flex-1 items-center px-10'>
          <p className='text-md text-start lg:font-semibold mt-4'>
            Debido a que esta página puede convertirse en una herramienta útil para todos los estudiantes en que necesitan conocer más sobre 
            esta asignatura. Por tanto exortamos a todos a compartir sus trabajos con el equipo de desarrollo para el contenido dsiponible.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home;