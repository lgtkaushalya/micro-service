import React, { useState } from 'react';
import axios from "axios";

export default ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post(`http://192.168.49.2:31526/posts/${postId}/comments`, {
            content
        });

        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Comment</label>
                    <input
                        value={content}
                        className="form-control"
                        onChange={e => setContent(e.target.value)}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
