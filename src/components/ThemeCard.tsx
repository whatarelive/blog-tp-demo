import { useNavigate } from 'react-router-dom';

interface Props {
  title: string,
  description: string
}

function ThemeCard({ title, description }: Props) {
  const navigate = useNavigate();
  const handlerClick = () => navigate(title);

  return (
    <article 
      className='flex flex-col py-4 px-5 rounded-3xl bg-gray-400 bg-opacity-10  
      hover:shadow-md hover:shadow-blue-300 hover:bg-gray-300 hover:bg-opacity-20'
      onClick={ handlerClick }
    >
      <h6 className='text-xl text-start text-blue-400 font-semibold cursor-pointer'>
        {title}
      </h6>
      <p className='flex flex-1 mt-4 text-center items-center'>
        {
          description.length > 250 
            ? `${ description.substring(0, 250)}...` 
            : description
        }
      </p>
      <span 
        className='self-end mt-4 hover:text-amber-300 cursor-pointer'
        onClick={handlerClick} 
      >
        Leer más...
      </span>
    </article>
  )
}

export default ThemeCard;