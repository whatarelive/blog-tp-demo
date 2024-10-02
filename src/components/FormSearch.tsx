import { Form, Formik } from "formik";
import { Search } from "lucide-react";
import TextInput from "./TextInput";

function FormSearch() {

  return (
    <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
          {() => (
            <Form className='mt-6'>
              <div>
                <TextInput 
                  type='text' 
                  name='search' 
                  placeholder='Introduce aquí el título de la temática'
                  >
                  <Search color='#fff'/>
                </TextInput>
              </div>
            </Form>
          )}
    </Formik>
  )
}

export default FormSearch;