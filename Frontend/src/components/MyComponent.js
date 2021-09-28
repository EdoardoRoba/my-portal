import axios from "axios";
import React from "react";

function MyComponent(props) {
    const beUrl = "http://localhost:8080/orders/612E253BB6D23E58E10A6860"
    const [post, setPost] = React.useState(null)
    React.useEffect(() => {
        axios.get(beUrl).then((response) => {
            setPost(response.data)
        })
    }, [])
    return (
        <div >
            <ul>
                {post === null ? "" : post.id}
            </ul>
        </div>
    );
}

export default MyComponent;
