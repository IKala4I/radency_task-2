import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import Table from '../../components/Table/Table'
import {getIsCreateMode, getIsEditMode, getNoteIdForUpdate} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import {FC, useState} from 'react'
import CreateNoteForm from '../../components/Forms/CreateNoteForm/CreateNoteForm'
import {tableTypes} from '../../enums/tableTypes'
import {logos} from '../../imageHelpers'
import EditNoteForm from '../../components/Forms/EditNoteForm/EditNoteForm'
import {formModesActions} from '../../redux/formModesReducer'
import {Dispatch} from 'redux'

const Main: FC = () => {

    const dispatch: Dispatch = useDispatch()

    const isCreateMode = useSelector(getIsCreateMode)
    const isEditMode = useSelector(getIsEditMode)
    const noteIdForUpdate = useSelector(getNoteIdForUpdate)

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
                    <Table tableType={tableTypes.ActiveNotes} isCreateMode={isCreateMode} isEditMode={isEditMode} noteIdForUpdate={noteIdForUpdate}/>
                    {isCreateMode ? <CreateNoteForm onCloseForm={toggleCreateMode}/> :
                        <ActionButton imgSrc={logos.plusLogo} buttonText='Create note'
                                      onClickCB={toggleCreateMode}/>}
                    {isEditMode ? <EditNoteForm noteIdForUpdate={noteIdForUpdate}/> : ''}
                </section>
                <section>
                    {isShowedArchivedNotes ? <Table tableType={tableTypes.ArchivedNotes} isCreateMode={isCreateMode} isEditMode={isEditMode} noteIdForUpdate={noteIdForUpdate}/> : ''}
                </section>
                <section>
                    <Table tableType={tableTypes.Summary} isCreateMode={isCreateMode} isEditMode={isEditMode} noteIdForUpdate={noteIdForUpdate}/>
                </section>
            </div>
        </main>
    )
}

export default Main