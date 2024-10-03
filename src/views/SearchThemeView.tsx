import { FileSearch } from "lucide-react";
import { ThemeCard } from "../components";
import { useThemes } from "../hooks";

function SearchThemeView() {
    const { themes } = useThemes();

  return (
    <section className='flex flex-col items-start mt-12 lg:mt-16'>
        <div className='flex flex-row items-center'>
          <FileSearch className='mx-3 w-8 h-8'/>
          <h3 className='text-lg font-bold lg:text-3xl lg:font-semibold'>
            Contenidos más buscadas...
          </h3>
        </div>
        <div className='container flex space-x-4 overflow-x-scroll md:overflow-hidden lg:grid lg:grid-cols-2 gap-8 p-8'>
          {
            themes.map(({title, description}) => (
              <ThemeCard key={title} title={title} description={description} />
            ))
          }
        </div>
    </section>
  )
}

export default SearchThemeView;