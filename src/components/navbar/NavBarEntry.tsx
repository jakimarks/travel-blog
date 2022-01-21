import './NavBarEntry.css'

type NavBarEntryProps = {
    text: string
}

function NavBarEntry({text}: NavBarEntryProps) {
    return (
        <span className="navbar__entry">
            {text}
        </span>
    )
}

export default NavBarEntry
