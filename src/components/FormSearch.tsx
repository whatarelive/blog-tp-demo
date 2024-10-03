import { NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import { useForm, useSearch } from "../hooks";
import TextInput from "./TextInput";

function FormSearch() {
  const { search, onInputChange } = useForm({ search: '' });
  const { listSearch } = useSearch({search});

  return (
    <form className='mt-6'>
      <div>
        <TextInput 
          type='text' 
          name='search'
          value={search}
          autoComplete='off'
          onChange={onInputChange}
          placeholder='Introduce aquí el título de la temática'
          >
          <Search className="w-4 h-5" color='#fff'/>
        </TextInput>
        {
          search &&
          <ul className="flex flex-col gap-4 p-4 mt-2 items-start rounded-lg bg-gray-500 bg-opacity-20">
            {
              listSearch.map((list) => (
                <li key={list}>
                  <NavLink to={`/${list}`} className='flex text-start hover:text-amber-300'>{list}</NavLink>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </form>
  )
}

export default FormSearch;