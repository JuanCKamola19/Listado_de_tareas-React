import { useForm } from "../hooks/useForm";

const TodoAdd = ({ handleNewTodo }) => {

    const { description, onInputChange, onResetForm, errorState } = useForm({
        description: '',
    })

    const onFormSubmit = e => {
        e.preventDefault();

        if (description.length < 3) return
        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }
        handleNewTodo(newTodo);
        onResetForm();

    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    className="input-add"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    placeholder="Agrega una nueva tarea" />
                <button className="btn-add" type="submit">
                    Agregar
                </button>
            </form>
            {errorState.length > 1 && <span className="error" role="alert">{errorState}</span>}
        </div>
    );
}
export default TodoAdd;