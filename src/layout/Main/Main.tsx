import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import archiveLogo from '../../assets/images/archive-logo.svg'
import plusLogo from '../../assets/images/plus-logo.svg'
import Table from '../../components/Table/Table'
import {getNotes} from '../../redux/selectors'
import {useSelector} from 'react-redux'
import SummaryTable from '../../components/SummaryTable/SummaryTable'
import {useState} from 'react'
import CreateForm from '../../components/CreateForm/CreateForm'
import {NotesArray} from '../../Types/types'

const Main = () => {

    const notes: NotesArray = useSelector(getNotes)

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

    return (
        <main>
            <div className="container">
                <ActionButton imgSrc={archiveLogo} buttonText={showArchivedNotesButtonText}
                              onClickCB={showArchivedNotes}/>
                <section>
                    <Table notes={activeNotes}/>
                    {createMode ?
                        <CreateForm onCloseForm={changeCreateMode}/> :
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