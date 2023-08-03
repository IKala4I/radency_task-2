import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {noteActions} from '../../../redux/notesReducer'
import {formModesActions} from '../../../redux/formModesReducer'
import CreateNoteReduxForm from './CreateNoteForm/CreateNoteForm'
import {FC} from 'react'
import {noteCategories} from '../../../enums/noteCategories'

type CreateNoteBlockProps = {
    onCloseForm: () => void
}

const CreateNoteBlock: FC<CreateNoteBlockProps> = ({onCloseForm}) => {
    const dispatch: Dispatch = useDispatch()

    const onCreateNote = (formData: CreateFormDataType) => {
        const note = {
            ...formData,
            content: formData.content ? formData.content : '',
            dates: formData.content ? getDatesFromContent(formData.content) : '',
            created: createTodayDate()
        }
        dispatch(noteActions.createNote(note))
        dispatch(formModesActions.toggleCreateMode())
    }

    return (
        <>
            <h3>Hello, wanna create a new note?)</h3>
            <CreateNoteReduxForm onCloseForm={onCloseForm} onSubmit={onCreateNote}/>
        </>
    )
}

export type CreateFormDataType = {
    name: string,
    category: noteCategories,
    content?: string
}
const getDatesFromContent = (content: string) => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g
    return content.match(dateRegex)?.join(', ') || ''
}

const createTodayDate = () => {
    const today = new Date()

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const month = months[today.getMonth()] // Отримуємо назву місяця з масиву
    const day = today.getDate() // Отримуємо число місяця
    const year = today.getFullYear() // Отримуємо рік

    return `${month} ${day}, ${year}`
}
export default CreateNoteBlock