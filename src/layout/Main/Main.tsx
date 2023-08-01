import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import archiveLogo from '../../assets/images/archive-logo.svg'
import plusLogo from '../../assets/images/plus-logo.svg'
import Table from '../../components/Table/Table'
import {getNotes} from '../../redux/selectors'
import {useDispatch, useSelector} from 'react-redux'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import {FC, useState} from 'react'
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm'
import {NotesArray} from '../../Types/types'
import {Dispatch} from 'redux'
import {actions} from '../../redux/notesReducer'

const Main: FC = () => {

    const notes: NotesArray = useSelector(getNotes)
    const dispatch: Dispatch = useDispatch()

    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    const [createMode, toogleCreateMode] = useState(false)
    const [isShowedArchivedNotes, setIsShowedArchivedNotes] = useState(false)
    const [showArchivedNotesButtonText, setShowArchivedNotesButtonText] = useState('Show archived notes')

    const changeCreateMode = () => {
        toogleCreateMode(!createMode)
    }

    const showArchivedNotes = () => {
        setIsShowedArchivedNotes(!isShowedArchivedNotes)
        const buttonText = !isShowedArchivedNotes ? 'Hide archived notes' : 'Show archived notes'
        setShowArchivedNotesButtonText(buttonText)
    }

    const onCreateNote = (formData: any) => {
        debugger
        const note = {
            ...formData,
            id: notes.length,
            archived: false,
            dates: getDatesFromContent(formData.content),
            created: createTodayDate()
        }
        dispatch(actions.createNote(note))
        toogleCreateMode(!createMode)
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
                <ActionButton imgSrc={archiveLogo} buttonText={showArchivedNotesButtonText}
                              onClickCB={showArchivedNotes}/>
                <section>
                    <Table notes={activeNotes}/>
                    {createMode ?
                        <CreateNoteForm onCloseForm={changeCreateMode} onSubmit={onCreateNote}/> :
                        <ActionButton imgSrc={plusLogo} buttonText='Create note' onClickCB={changeCreateMode}/>
                    }
                </section>
                <section>
                    {isShowedArchivedNotes ? <Table notes={archivedNotes}/> : ''}
                </section>
                <section>
                    <SummaryTable notes={notes}/>
                </section>
            </div>
        </main>
    )
}

export default Main