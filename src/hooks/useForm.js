import { useState } from "react"
export const useForm = (initialForm) => {
    const [formState, setForState] = useState(initialForm)
    const [errorState, setErrorState] = useState("")

    const onInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setForState({
            ...formState,
            [name]: value
        });
        if (value.length < 3) {
            setErrorState(
                "La tarea debe contener minimo 3 caracteres"
            )
        } else { setErrorState("") }
    }

    const onResetForm = () => {
        setForState(initialForm)
    }
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        errorState,
        setErrorState,
    }

}