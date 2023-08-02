import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import Table from '../../components/Table/Table'
import {getIsCreateMode, getIsEditMode, getNoteIdForUpdate, getNotes} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {FC, useState} from 'react'
import CreateNoteForm from '../../components/Forms/CreateNoteForm/CreateNoteForm'
import {NotesArray} from '../../Types/types'
import {tableTypes} from '../../enums/tableTypes'
import {logos} from '../../imageHelpers'
import EditNoteForm from '../../components/Forms/EditNoteForm/EditNoteForm'
import {formModesActions} from '../../redux/formModesReducer'
import {Dispatch} from 'redux'

const Main: FC = () => {

    const dispatch: Dispatch = useDispatch()

    const notes: NotesArray = useSelector(getNotes)
    const isCreateMode = useSelector(getIsCreateMode)
    const isEditMode = useSelector(getIsEditMode)
    const noteIdForUpdate = useSelector(getNoteIdForUpdate)

    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    const [isShowedArchivedNotes, setIsShowedArchivedNotes] = useState(false)
    const [showArchivedNotesButtonText, setShowArchivedNotesButtonText] = useState('Show archived notes')

    const showArchivedNotes = () => {
        setIsShowedArchivedNotes(!isShowedArchivedNotes)
        const buttonText = !isShowedArchivedNotes ? 'Hide archived notes' : 'Show archived notes'
        setShowArchivedNotesButtonText(buttonText)
    }

    const toggleCreateMode = () => {
        if (!isCreateMode && isEditMode)
            dispatch(formModesActions.toggleEditMode())
        dispatch(formModesActions.toggleCreateMode())
    }

    return (
        <main>
            <div className="container">
                <ActionButton imgSrc={logos.archiveLogo} buttonText={showArchivedNotesButtonText}
                              onClickCB={showArchivedNotes}/>
                <section>
                    <Table notes={activeNotes} tableType={tableTypes.Notes}/>
                    {isCreateMode ? <CreateNoteForm onCloseForm={toggleCreateMode}/> :
                        <ActionButton imgSrc={logos.plusLogo} buttonText='Create note'
                                      onClickCB={toggleCreateMode}/>}
                    {isEditMode ? <EditNoteForm noteIdForUpdate={noteIdForUpdate}/> : ''}
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