import {InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import styles from '../Forms.module.css'
import {categoryOptions, createField, GetStringKeys, Input, Select, Textarea} from '../../FormControls/FormControls'
import {maxLengthCreator} from '../../../utils/validators'
import {Dispatch} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import {noteActions} from '../../../redux/notesReducer'
import {formModesActions} from '../../../redux/formModesReducer'
import {getContentNoteForUpdate, getNameNoteForUpdate} from '../../../redux/selectors'

const maxLength20 = maxLengthCreator(20)
const maxLength100 = maxLengthCreator(100)

type CreateNoteFormOwnProps = {
    onCloseForm: any,
    noteData: any
}
const EditNoteForm: FC<InjectedFormProps<CreateNoteFormValuesType, CreateNoteFormOwnProps>
    & CreateNoteFormOwnProps> = ({onCloseForm, handleSubmit, noteData}: any) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>(`${noteData.noteName}`, 'name', [maxLength20], Input)}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>('', 'category', [], Select,
                    {options: categoryOptions})}
            </div>
            <div className={styles.fieldBlock}>
                {createField<CreateNoteFormTypeKeys>(`${noteData.noteContent}`, 'content', [maxLength100], Textarea)}
            </div>
            <div className={styles.buttons}>
                <button className={styles.actionButton} type="submit">Save</button>
                <button className={styles.actionButton} onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

const EditNoteReduxForm = reduxForm<CreateNoteFormValuesType, CreateNoteFormOwnProps>({form: 'createNote'})(EditNoteForm)

const EditNoteBlock = ({noteIdForUpdate}: any) => {
    const dispatch: Dispatch = useDispatch()
    const noteName = useSelector(getNameNoteForUpdate(noteIdForUpdate))
    const noteContent = useSelector(getContentNoteForUpdate(noteIdForUpdate))

    const toggleEditMode = () => {
        dispatch(formModesActions.toggleEditMode())
    }

    const onUpdateNote = (formData: any) => {
        const note = {
            name: noteName,
            content: noteContent,
            ...formData,
            dates: formData.content ? getDatesFromContent(formData.content) : getDatesFromContent(noteContent),
        }
        dispatch(noteActions.updateNote(noteIdForUpdate, note))
        dispatch(formModesActions.toggleEditMode())
    }

    return (
        <>
            <h3>Do you wanna change your note {noteName} ?</h3>
            <EditNoteReduxForm onCloseForm={toggleEditMode} onSubmit={onUpdateNote}
                               noteData={{noteName, noteContent}}/>
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
export default EditNoteBlock