import { NotepadText } from "lucide-react";
import { ThemeList } from "../components";
import { useThemes } from "../hooks";

function AllThemesView() {
    const { articles } =  useThemes();

  return (
    <section className='flex flex-col items-start mt-12 lg:mt-16'>
        <div className='flex flex-row items-center'>
          <NotepadText className='mx-3 w-8 h-8'/>
          <h3 className='text-lg font-bold lg:text-3xl lg:font-semibold'>
            Temáticas disponibles...
          </h3>
        </div>
        <ul className='flex flex-1 flex-col mt-4'>
        {
          articles.map(({theme, subthemes}) => (
            <li key={theme}>
              <ThemeList theme={theme} subthemes={subthemes}/>
            </li>
          ))
        }
        </ul>
    </section>
  )
}

export default AllThemesView;