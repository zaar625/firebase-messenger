import React from 'react'
import { AiOutlineUpload } from "react-icons/ai";

const MessageForm = ({handleSubmit, text, setText, setImg}) => {
  return (
    <form className='message_form' onSubmit={handleSubmit}>
        <label htmlFor='img'><AiOutlineUpload/></label>
        <input onChange={e => setImg(e.target.files[0])} type='file' id='img' accept='image/*' style={{display:'none'}}/>
        <div>
            <input type='text' placeholder="Enter message" value={text} onChange={e=>setText(e.target.value)}/>
        </div>
        <div>
            <button className='btn'>Send</button>
        </div>
    </form>
  )
}

export default MessageForm