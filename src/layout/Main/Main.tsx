import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import Table from '../../components/Table/Table'
import {getNoteIdForUpdate, getNotes} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {FC, useState} from 'react'
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm'
import {NotesArray} from '../../Types/types'
import {Dispatch} from 'redux'
import {actions} from '../../redux/notesReducer'
import styles from './Main.module.css'
import {tableTypes} from '../../enums/tableTypes'
import {logos} from '../../imageHelpers'

const Main: FC = () => {

    const notes: NotesArray = useSelector(getNotes)
    const noteIdForUpdate = useSelector(getNoteIdForUpdate)
    const dispatch: Dispatch = useDispatch()

    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    const [isCreateMode, changeIsCreateMode] = useState(false)
    const [isEditMode, changeIsEditMode] = useState(false)

    const [editFormTitle, setEditFormTitle]: any = useState(null)

    const [isShowedArchivedNotes, setIsShowedArchivedNotes] = useState(false)
    const [showArchivedNotesButtonText, setShowArchivedNotesButtonText] = useState('Show archived notes')

    const toggleCreateMode = () => {
        changeIsCreateMode(!isCreateMode)
    }
    const toggleEditMode = (noteId: number | null = null) => {
        if (noteId !== noteIdForUpdate && Number.isFinite(noteId)) {
            dispatch(actions.changeNoteIdForUpdate(noteId as number))
            setEditFormTitle(notes[noteId as number].name)
        }
        if (noteIdForUpdate === null || noteId === null) {
            changeIsEditMode(!isEditMode)
        }
    }

    const showArchivedNotes = () => {
        setIsShowedArchivedNotes(!isShowedArchivedNotes)
        const buttonText = !isShowedArchivedNotes ? 'Hide archived notes' : 'Show archived notes'
        setShowArchivedNotesButtonText(buttonText)
    }

    const onCreateNote = (formData: any) => {
        const note = {
            ...formData,
            id: notes.length,
            archived: false,
            dates: getDatesFromContent(formData.content),
            created: createTodayDate()
        }
        dispatch(actions.createNote(note))
        changeIsCreateMode(!isCreateMode)
    }
    const onUpdateNote = (formData: any) => {
        const note = {
            ...formData,
            id: noteIdForUpdate,
            dates: formData.content ? getDatesFromContent(formData.content) : getDatesFromContent(notes[noteIdForUpdate as number].content)
        }
        dispatch(actions.updateNote(noteIdForUpdate as number, note))
        dispatch(actions.changeNoteIdForUpdate(null))
        changeIsEditMode(!isEditMode)
    }

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

    return (
        <main>
            <div className="container">
                <ActionButton imgSrc={logos.archiveLogo} buttonText={showArchivedNotesButtonText}
                              onClickCB={showArchivedNotes}/>
                <section>
                    <Table notes={activeNotes} showEditForm={toggleEditMode} tableType={tableTypes.Notes}/>
                    {isCreateMode ?
                        <CreateNoteForm onCloseForm={toggleCreateMode} onSubmit={onCreateNote}/> :
                        isEditMode ?
                            <div>
                                <h3 className={styles.editFormTitle}>Do you wanna
                                    change {editFormTitle} ?</h3>
                                <CreateNoteForm onCloseForm={toggleEditMode} onSubmit={onUpdateNote}/>
                            </div> :
                            <ActionButton imgSrc={logos.plusLogo} buttonText='Create note'
                                          onClickCB={toggleCreateMode}/>
                    }
                </section>
                <section>
                    {isShowedArchivedNotes ? <Table notes={archivedNotes} tableType={tableTypes.Notes}/> : ''}
                </section>
                <section>
                    <Table notes={notes} tableType={tableTypes.Summary}/>
                </section>
            </div>
        </main>
    )
}

export default Main