import { FormSearch } from '../components';
import { HandHelping } from 'lucide-react';
import { AllThemesView, SearchThemeView } from '../views';

function Home() {
  return (
    <main className='min-h-screen w-full items-center justify-center px-32'>
      <section className='flex flex-col min-h-48 mt-32'>
        <h1 className=' text-5xl font-semibold text-start self-start'>
          Temáticas importantes <br /> de Teoría Polítca
        </h1>
        <FormSearch/>
      </section>
      
      <SearchThemeView/>
      
      <AllThemesView/>

      <section className='flex flex-1 flex-col items-start mt-16'>
        <div className='flex flex-row items-center self-start'>
          <HandHelping className='mx-3 w-8 h-8'/>
          <h3 className='text-3xl font-semibold'>
            Contribuciones
          </h3>
        </div>
        <div className='flex flex-1 items-center px-10'>
          <p className='text-md text-start font-semibold mt-4'>
            Debido a que esta página puede convertirse en una herramienta útil para todos los estudiantes en que necesitan conocer más sobre 
            esta asignatura. Por tanto exortamos a todos a compartir sus trabajos con el equipo de desarrollo para el contenido dsiponible.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home;