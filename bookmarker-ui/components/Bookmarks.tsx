import { BookmarksResponse } from "../services/models"
import BookmarkComponent from "./BookmarkComponent"
import Pagination from "./Pagination"


interface BookmarkProps {
    bookmarks: BookmarksResponse,
}

const Bookmarks: React.FC<BookmarkProps> = ({bookmarks}) =>  (
    <div>
        <Pagination bookmarks={bookmarks}></Pagination>
        {bookmarks.data.map(bookmark => <BookmarkComponent key={bookmark.id} bookmark={bookmark}/>)}
    </div>
)

export default Bookmarks