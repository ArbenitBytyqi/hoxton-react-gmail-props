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

                <li className="item toggle">
                    <label htmlFor="hide-read">Hide read</label>
                    <input
                        id="hide-read"
                        type="checkbox"
                        checked={hideRead}
                        onChange={e => setHideRead(e.target.checked)}
                    />
                </li>
            </ul>
        </nav>
    )
}