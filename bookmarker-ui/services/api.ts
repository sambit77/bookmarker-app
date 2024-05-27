import axios, {AxiosResponse} from "axios"
import { BookmarksResponse } from "./models"
import getConfig from 'next/config'
import { RedirectType } from "next/navigation"

export const  fetchBookmarks =  async (page: number) : Promise<BookmarksResponse> => {

    const url = `http://localhost:8080/api/bookmarks?page=${page}`
    const res = await axios.get<BookmarksResponse>(url)
    return res.data
}