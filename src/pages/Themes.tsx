import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getSubThemeForTitle } from "../helpers/getThemeForTitle";
import { FormSearch } from "../components";
import { ArrowLeft } from "lucide-react";
import SubThemeCard from '../components/SubThemeCard';

function Themes() {
  const navigate = useNavigate();
  const { theme } = useParams();

  const subtheme = useMemo(() => getSubThemeForTitle(theme), [theme]);

  if (!subtheme) return <Navigate to={'/'}/>

  return (
    <main className='min-h-screen w-full items-center justify-center px-32'>
      <section className='flex flex-col min-h-48 mt-32'>
        <div className="flex flex-row">
          <div 
            className="flex flex-1 flex-row hover:text-amber-300 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mx-3"/>
            <span>Regresar a inicio</span>
          </div>
          <h1 className='text-xl font-semibold self-end'>
            Temáticas importantes de Teoría Polítca
          </h1>
        </div>
        <FormSearch/>
      </section>
      <section className='flex flex-1 flex-col items-center justify-center'>
        <h3 className="text-3xl font-semibold text-opacity-50">
          {subtheme.title}
          <hr />
        </h3>
        <p className="mt-8 text-start">
          {subtheme.description}
        </p>
        <ul className="mt-16 grid grid-cols-1 gap-4">
          {
            subtheme.content.map(({title, description}) => (
              <li key={title}>
                <SubThemeCard title={title} description={description}/>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Themes;