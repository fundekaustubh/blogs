import './App.css';
import { ListGroup } from "react-bootstrap";
const DisplayBlogs = ({ blogs }) => {
    const findNthIndexOf = (text, character, count) => {
        let i = 0;
        for (i = 0; i < text.length; i++) {
            if (text[i] === character) {
                count--;
            }
            if (count === 0) {
                return i;
            }
        }
        return i;
    }
    return (
        <ListGroup>
            {blogs.map(blog => (
                <ListGroup.Item className="bg-dark text-white border-0" key={blog.id}>
                    {blog.text.slice(0, findNthIndexOf(blog.text, ' ', 7))}...
                    <span className="blockquote-footer text-white">
                        <cite title="Source Title">{blog.author}</cite>
                    </span>
                </ListGroup.Item>
            )
            )}
        </ListGroup>
    );
}

export default DisplayBlogs;