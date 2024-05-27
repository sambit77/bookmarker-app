import { NextPage } from "next"
import { useState } from "react";
import { saveBookmark } from "../../services/api";

const AddBookMark: NextPage = () => {
  const [message, setMessage] = useState<string|null>(null);
  const [url,setUrl] = useState("");
  const [title, setTitle]= useState("");
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if(!url)
        {
            alert("URL cant be empty");
            return;
        }

    const payload = {
        title,
        url
    }

    const response = await saveBookmark(payload);
    //console.log("Saved successfully" , response);
    setTitle("");
    setUrl("");
    setMessage("Bookmark saved successfully");

  }

    return(
        <div className="card">
        <div className="card-header text-center">
          <h2>Create New Bookmark</h2>
        </div>
        <div className="card-body">
          <div className="card-text">
            {message && <div className="alert alert-primary" role="alert">{message}</div>}
            <form onSubmit={e => handleSubmit(e)} >
              <div className="mb-3">
              <label htmlFor="url" className="form-label">URL</label>
              <input type="text" className="form-control" id="url" value={url} onChange={e =>  setUrl(e.target.value)}></input>
              </div>
              <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)}></input>
              </div>
              <div className="row justify-content-center">
              <div className="col-auto">
               <button type="submit" className="btn btn-primary">Add bookmark to database</button>
              </div>
        </div>
            </form>
          </div>
    
        </div>
      </div>
)
}

export default AddBookMark