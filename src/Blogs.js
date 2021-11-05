import DisplayBlogs from './DisplayBlogs';
import useFetch from './useFetch';
import Hypnosis from "react-cssfx-loading/lib/Hypnosis";
const Blogs = () => {
    const { data: blogs, pending, error } = useFetch('http://localhost:8000/blogs');
    return (
        <div>
            {error && <div>{error}</div>}
            {pending && <Hypnosis color="white" width="50px" height="50px" className="position-absolute top-50 start-50 translate-middle" />}
            {blogs && <DisplayBlogs blogs={blogs} />}
        </div>
    );
}

export default Blogs;