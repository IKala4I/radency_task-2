import '../commonStyles.css'
import ActionButton from '../../components/ActionButton/ActionButton'
import archiveLogo from '../../assets/images/archive-logo.svg'
import plusLogo from '../../assets/images/plus-logo.svg'
import Table from '../../components/Table/Table'
import {getNotes} from '../../redux/selectors'
import {NoteType} from '../../redux/notesReducer'
import {useSelector} from 'react-redux'
import SummaryTable from '../../components/SummaryTable/SummaryTable'

const Main = () => {

    const notes: Array<NoteType> = useSelector(getNotes)
    const archivedNotes = notes.filter(note => note.archived)
    const activeNotes = notes.filter(note => !note.archived)

    return (
        <main>
            <div className="container">
                <ActionButton imgSrc={archiveLogo} buttonText='Show archived notes'/>
                <section>
                    <Table notes={activeNotes}/>
                    <ActionButton imgSrc={plusLogo} buttonText='Create note'/>
                </section>
                <section>
                    <Table notes={archivedNotes}/>
                </section>
                <section>
                    <SummaryTable notes={notes}/>
                </section>
            </div>
        </main>
    )
}

export default Main