import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { getSubThemeForTitle } from "../helpers/getThemeForTitle";
import { FormSearch } from "../components";
import { ArrowLeft } from "lucide-react";

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
            className="flex flex-1 flex-row hover:text-amber-300 "
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
      <section>
        <h3>{subtheme.title}</h3>
        <p>{subtheme.description}</p>
        <ul>
          {
            subtheme.content.map(({title, description}) => (
              <li key={title}>
                <article>
                  <h6>{title}</h6>
                  <p>{description}</p>
                </article>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
}

export default Themes;