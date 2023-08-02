import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import styles from '../Forms.module.css'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../FormControls/FormControls'
import {maxLengthCreator, required} from '../../../utils/validators'
import {Dispatch} from 'redux'
import {useDispatch} from 'react-redux'
import {noteActions} from '../../../redux/notesReducer'
import {formModesActions} from '../../../redux/formModesReducer'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type CreateNoteFormOwnProps = {
    onCloseForm: any
}
const CreateNoteForm: FC<InjectedFormProps<CreateNoteFormValuesType, CreateNoteFormOwnProps>
    & CreateNoteFormOwnProps> = ({onCloseForm, handleSubmit}: any) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('Name', 'name', [required, maxLength20], Input)}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('', 'category', [], Select,
                    {options: categoryOptions})}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('Your content (optional)', 'content', [maxLength100], Textarea)}
            </div>
            <div className={styles.buttons}>
                <button className={styles.actionButton} type="submit">Save</button>
                <button className={styles.actionButton} onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const CreateNoteReduxForm = reduxForm<CreateNoteFormValuesType, CreateNoteFormOwnProps>({form: 'createNote'})(CreateNoteForm)

const CreateNoteBlock = ({onCloseForm}: any) => {
    const dispatch: Dispatch = useDispatch()

    const onCreateNote = (formData: any) => {
        const note = {
            ...formData,
            content: formData.content ? formData.content : '',
            dates: formData.content ? getDatesFromContent(formData.content) : null,
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

type CreateNoteFormValuesType = {
    name: string,
    category: string,
    content: string
}
type CreateNoteFormTypeKeys = GetStringKeys<CreateNoteFormValuesType>

const getDatesFromContent = (content: string) => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g
    return content.match(dateRegex)?.join(', ')
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