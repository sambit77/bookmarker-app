import axios, {AxiosResponse} from "axios"
import { BookmarksResponse } from "./models"
import getConfig from 'next/config'
import { RedirectType } from "next/navigation"

export const  fetchBookmarks =  async (page: number, query: string) : Promise<BookmarksResponse> => {

    let url = `http://localhost:8080/api/bookmarks?page=${page}`

    if(query)
        {
            url += `&query=${query}`
        }
    const res = await axios.get<BookmarksResponse>(url)
    return res.data
}

export const  saveBookmark =  async (bookmark: {title: string,url: string })  => {
    const res = await axios.post(`http://localhost:8080/api/bookmarks`,bookmark)
    return res.data
}
 