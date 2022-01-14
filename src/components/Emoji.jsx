import React, { useState } from 'react'
import { emojiArr } from '../core'
function Emoji() {
    // console.log(emojiArr);
    const [inputValue, setInputValue] = useState("")
    const arrOfObj = emojiArr
    const [filt, setFilt] = useState([])
    const [notFound, setNotFound] = useState(null)

    const handleSubmit = (a) => {
        a.preventDefault();
        const filtering = arrOfObj.filter((element) => element.tags.includes(inputValue))
        setFilt(filtering)
        if (filtering.length > 0) {
            setFilt(filtering)
            setNotFound(null)

        } else {
            setNotFound(<h1 className='my-2' style={{ textAlign: "center" }} >Not Found</h1>)
        }
        console.log(filtering);

    }

    return (
        <div className="container m-3">
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-10">
                        <input type="text" id="inputPassword6" onChange={(e) => {
                            setInputValue(e.target.value)
                        }} defaultValue={inputValue} class="form-control" aria-describedby="passwordHelpInline" required />
                    </div>
                    <div className="col-2">
                        <button type="submit" class="btn btn-danger">Danger</button>
                    </div>
                </div>
            </form>
            <div className="row">
                <div className="col">
                    {notFound === null ? filt?.map((element) => (
                        <span style={{ fontSize: "10em" }}>{element.emoji}</span>
                    )) : notFound
                    }
                </div>
            </div>
        </div>
    )
}

export default Emoji
