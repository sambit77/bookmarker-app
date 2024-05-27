
import Link from "next/link";
import { BookmarksResponse } from "../services/models";

interface PaginationProps{
    bookmarks : BookmarksResponse
}

const Pagination: React.FC<PaginationProps> = ({bookmarks}) => {

    const path = "/bookmarks";
    //const queryParams = (query === undefined || query === "")? {}:{query: query}
    const firstPage = {pathname: path, query: {page : 1}};
    const previousPage = {pathname: path, query: {page : bookmarks.currentPage-1}};
    const nextPage = {pathname: path, query: {page : bookmarks.currentPage+1}};
    const lastPage = {pathname: path, query: {page : bookmarks.totalPages}};


    return(
        <div>
            <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                <li className={"page-item "+ (bookmarks.hasPrevious ? "": "disabled")}>
                    <Link legacyBehavior href={firstPage}>
                    <a className="page-link">First</a>
                    </Link>
                </li>

                <li className={"page-item "+ (bookmarks.hasPrevious ? "": "disabled")}>
                    <Link legacyBehavior href={previousPage}>
                    <a className="page-link">Previous</a>
                    </Link>
                </li>

                <li className={"page-item "+ (bookmarks.hasNext ? "": "disabled")}>
                    <Link legacyBehavior href={nextPage}>
                    <a className="page-link">Next</a>
                    </Link>
                </li>

                <li className={"page-item "+ (bookmarks.hasNext ? "": "disabled")}>
                    <Link legacyBehavior href={lastPage}>
                    <a className="page-link">Last</a>
                    </Link>
                </li>
               
            </ul>
            </nav>
        </div>
    )
}

export default Pagination