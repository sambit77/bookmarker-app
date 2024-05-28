import Link from "next/link";
import { Bookmark } from "../services/models";

interface BookmarkProps {
    bookmark: Bookmark
}

const BookmarkComponent: React.FC<BookmarkProps> = ({bookmark}) => (
    <div>
        <div className="alert alert-primary" role="alert">
        <h5>
            <Link legacyBehavior href={bookmark.url}><a target="_blank" className="text-decoration-none">{bookmark.title}</a></Link>
        </h5>
        </div>
    </div>
)

export default BookmarkComponent