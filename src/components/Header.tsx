import { LeftMenuHeader } from "./LeftMenuHeader";
import { SearchHeader } from "./SearchHeader";

export function Header() {
    return (
        <header className="header">

            <LeftMenuHeader />

            <SearchHeader />

        </header>
    )
}