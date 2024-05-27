import axios, {AxiosResponse} from "axios"
import { BookmarksResponse } from "./models"
import getConfig from 'next/config'
import { RedirectType } from "next/navigation"
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const getApiUrl = () => {
    //console.log("Server runtime", serverRuntimeConfig);
    //console.log("public runtime",publicRuntimeConfig);
    return serverRuntimeConfig.API_BASE_URL || publicRuntimeConfig.API_BASE_URL
}

export const  fetchBookmarks =  async (page: number, query: string) : Promise<BookmarksResponse> => {

    let url = `${getApiUrl()}/api/bookmarks?page=${page}`

    if(query)
        {
            url += `&query=${query}`
        }
    const res = await axios.get<BookmarksResponse>(url)
    return res.data
}

export const  saveBookmark =  async (bookmark: {title: string,url: string })  => {
    const res = await axios.post(`${getApiUrl()}/api/bookmarks`,bookmark)
    return res.data
}
 