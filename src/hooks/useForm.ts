import { useState } from "react"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = ( initialValue: any ) => {

    const [ formState, setFormState ] = useState( initialValue );

    const onInputChange = ( { target }: React.ChangeEvent<HTMLInputElement> ) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialValue );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}