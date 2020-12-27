import React, { useState, useEffect } from "react";
import "./style.scss";
import { getPosts } from "../../api/base/posts";
import ShowPost from "./components/showPost/index";
import AddPost from "./components/addPost";
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const result = await getPosts();
    console.log(result.data);
    if (result.success) {
      setPosts(result.data);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="homepage">
      <div className="homepage__border">
        <AddPost />
        {posts.map((post, index) => (
          <div key={"post" + index}>
            <ShowPost
              key={"post" + index}
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </div>
          // <div key={"post" + index} className="content">
          //   <div className="box-user">
          //     <div className="box-user__userId">User Id: {post.userId}</div>
          //     <div className="box-user__Id"> Id post:{post.id}</div>
          //   </div>
          //   <div className="content__title">
          //     <b>Title:</b> {post.title}
          //   </div>
          //   <div className="content__body">
          //     <b>Body:</b> {post.body}
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};
export default HomePage;
