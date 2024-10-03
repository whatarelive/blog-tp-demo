import { NavLink } from 'react-router-dom';
import { SubThemes } from '../interfaces/interfaces';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface Props {
    theme: string,
    subthemes: SubThemes[],
}

function ThemeList({theme, subthemes}: Props) {  
    const [view, setView] = useState(false);

  return (
    <>
        <article className='flex flex-col py-4 px-5'>
            <div 
                className='flex items-center'
                onClick={() => setView(!view)}
            >
                <Play className='w-4 mx-3 lg:w-12' fill='#fff'/>
                <h4 className='text-md lg:text-xl font-bold lg:font-semibold text-start cursor-pointer'>
                    {`${theme} :`}
                </h4>
            </div>
            <ul className={`${ !view ? 'hidden' :  'flex flex-col items-start mx-4 mt-4 gap-3'}`}>
                {
                    subthemes.map(({title}, index) => ( 
                        <li key={title}>
                            <NavLink 
                                to={`/${title}`}
                                className='text-sm font-semibold lg:text-md flex text-start text-blue-300 hover:text-amber-200 cursor-pointer'
                            >
                                { `${index+1}: ${title}` }
                            </NavLink> 
                        </li>
                    ))
                }
            </ul>
        </article>
    </>
  )
}

export default ThemeList;