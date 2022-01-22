import './NavBarEntry.css'

type NavBarEntryProps = {
    text: string
}

function NavBarEntry({text}: NavBarEntryProps) {
    return (
        <p className="navbar__entry">
            <a href="#home">{text}</a>
        </p>
    )
}

export default NavBarEntry
