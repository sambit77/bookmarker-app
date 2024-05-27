import { BookmarksResponse } from "../services/models"
import BookmarkComponent from "./BookmarkComponent"
import Pagination from "./Pagination"
import SearchForm from "./SearchForm"


interface BookmarkProps {
    bookmarks: BookmarksResponse,
    query?: string
}

const Bookmarks: React.FC<BookmarkProps> = ({bookmarks,query}) =>  (
    <div>
        <SearchForm></SearchForm>
        <Pagination bookmarks={bookmarks} query={query}></Pagination>
        {bookmarks.data.map(bookmark => <BookmarkComponent key={bookmark.id} bookmark={bookmark}/>)}
    </div>
)

export default Bookmarks