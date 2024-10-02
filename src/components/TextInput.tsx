import { useField } from "formik";

interface Props {
  name: string,
  type?: 'text' | 'number',
  placeholder?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any,
  children?: React.ReactNode,
}

function TextInput({children, ...props}: Props) {
  const [ field ] = useField(props);

  return (
    <>
      <div className="flex flex-row my-2 px-4 justify-center items-center border-solid rounded-3xl border-2 
          focus-within:border-blue-400 hover:shadow-lg hover:shadow-blue-200"
        >
          {children}
          <input className="h-16 flex flex-1 px-4 outline-none bg-transparent" {...field} {...props} />
      </div>
    </>
  )
}

export default TextInput;