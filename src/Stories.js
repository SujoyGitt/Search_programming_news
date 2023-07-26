import React from "react";
import { useGlobalContext } from "./context";
export const Stories = () => {
  let { hits, isLoading, removePost } = useGlobalContext();
  console.log(hits);

  if (isLoading) {
    return <h2 className="loading">Loading....</h2>;
  }
  return (
    <>
      {hits.map((currentdata) => {
        const { objectID, author, title, num_comments, url } = currentdata;
        return (
          <div className="card" key={objectID}>
            <h2>{title}</h2>
            <p className="author_comment">
              By <span>{author} </span> | <span>{num_comments}</span> Comments
            </p>
            <div className="card_button">
              <a href={url} target="blank">
                Read More
              </a>
              <a href="#" onClick={() => removePost(objectID)}>
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};
