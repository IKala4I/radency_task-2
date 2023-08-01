import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FC} from 'react'
import styles from './CreateNoteForm.module.css'

type CreateNoteFormOwnProps = {
    onCloseForm: any
}
const CreateNoteForm: FC<InjectedFormProps<CreateNoteFormValuesType, CreateNoteFormOwnProps>
    & CreateNoteFormOwnProps> = ({onCloseForm, handleSubmit}: any) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldBlock}>
                <Field className={styles.field} name='name' component='input' placeholder='Name'/>
            </div>
            <div className={styles.fieldBlock}>
                <Field
                    name='category'
                    component='select'
                    placeholder='Choose a category'
                >
                    <option value="Task">Task</option>
                    <option value="Idea">Idea</option>
                    <option value="Quote">Quote</option>
                    <option value="Random Thought">Random Thought</option>
                </Field>
            </div>
            <div className={styles.fieldBlock}>
                <Field className={`${styles.field} ${styles.content}`} name="content" component='textarea'
                       placeholder='Content'></Field>
            </div>
            <div className={styles.buttons}>
                <button className={styles.actionButton} type="submit">Save</button>
                <button className={styles.actionButton} onClick={onCloseForm}>Close</button>
            </div>
        </form>
    )
}

type CreateNoteFormValuesType = {
    name: string,
    category: string,
    content: string
}
type CreateNoteFormTypeKeys = GetStringKeys<CreateNoteFormValuesType>
export type GetStringKeys<T> = Extract<keyof T, string>
export default reduxForm<CreateNoteFormValuesType, CreateNoteFormOwnProps>({form: 'createNote'})(CreateNoteForm)