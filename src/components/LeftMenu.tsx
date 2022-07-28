import { HideRead } from "./HideRead";
import { Inbox } from "./Inbox";
import { Starred } from "./Starred";

export function LeftMenu({
    currentTab,
    setCurrentTab,
    unreadEmails,
    starredEmails,
    hideRead,
    setHideRead }) {
    return (
        <nav className="left-menu">
            <ul className="inbox-list">

                <Inbox
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    unreadEmails={unreadEmails}
                />

                <Starred
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    starredEmails={starredEmails}
                />

                <HideRead
                    hideRead={hideRead}
                    setHideRead={setHideRead}
                />

            </ul>
        </nav>
    )
}