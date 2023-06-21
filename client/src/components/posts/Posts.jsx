import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(['posts'], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  // Check if data is undefined
  if (!data) {
    return "No posts available";
  }

  // Filter out duplicate posts based on id
  const uniquePosts = Array.from(new Set(data.map((post) => post.id))).map((id) =>
    data.find((post) => post.id === id)
  );

  return (
    <div className="posts">
      {error ? (
        "Something went wrong!"
      ) : isLoading ? (
        "Loading"
      ) : (
        uniquePosts.map((post) => <Post post={post} key={`post_${post.id}`} />)
      )}
    </div>
  );
};

export default Posts;