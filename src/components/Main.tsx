import { EmailsToggle } from "./EmailsToggle";

export function Main({
    getFilteredEmails,
    toggleRead,
    toggleStar }) {
    return (
        <main className="emails">
            <ul>
                {getFilteredEmails().map((email, index) => (
                    <EmailsToggle
                        email={email}
                        index={index}
                        toggleRead={toggleRead}
                        toggleStar={toggleStar}
                    />
                ))}
            </ul>
        </main>
    )
}