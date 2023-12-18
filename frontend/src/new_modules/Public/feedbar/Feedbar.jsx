import React, { useEffect, useState } from "react";
import "./Feedbar.scss";
import dp from "../../../assets/dp.jpg";
// import Post from "./post/Post";
import { HiDotsVertical } from "react-icons/hi";

import axios from "axios";
import { TbPhotoPlus } from "react-icons/tb";
import { useLocation } from "react-router";


function Feedbar() {
  const location = useLocation()
  const [profileId, setProfileId] = useState(localStorage.getItem("id"));
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [fileModal, setFileModal] = useState(false);
  const [postData, setPostData] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [userDetail, setUserDetail] = useState([]);
  

  const date = new Date();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const newDate = day + "/" + month + "/" + year;
  

const customImg = "https://tse1.mm.bing.net/th?id=OIP.PY7JG8p0h1zf2yRKgxhAaQHaHa&pid=Api&rs=1&c=1&qlt=95&w=117&h=117"

  const fetchPost = () => {
    axios
      .get(`https://6560c27c83aba11d99d1778b.mockapi.io/user_details/${profileId}`)
      .then((res) => 
      setPostData(res.data?.post)
      // console.log(res.data?.post)
        )
      .catch((rej) => console.log(rej));
      
  };
  const fetchUserProfile = () => {
    axios
      .get(`https://6560c27c83aba11d99d1778b.mockapi.io/user_details/${profileId}`)
      .then((res) => 
      setUserProfile(res.data)
      // console.log(res.data)
        )
      .catch((rej) => console.log(rej));
      
  };
  const fetchUserDetail = () => {
    axios
      .get("https://6560c27c83aba11d99d1778b.mockapi.io/user_details")
      .then((res) => 
       
      setUserDetail(res.data)
        )
      .catch((rej) => console.log(rej));
      
  };
  useEffect(() => {
    
    fetchUserDetail();
    fetchPost();
    fetchUserProfile();
  }, []);


  const getCaption = (e) => {
    setCaption(e.target.value);
  };
  const getContent = (e) => {
    setContent(e.target.value);
  };

  const submitPost = () => {
    if (!caption && !content) {
      return;
    } else {
      let newPostData = postData.unshift(
        {
          "caption": caption,
          "content": content,
          "date": newDate,
          "like": 0,
          "comment": 0
          }
      )
      axios
        .put(`https://6560c27c83aba11d99d1778b.mockapi.io/user_details/${profileId}`, 
        {
        post: postData
        }
        )
        .then((res) => fetchPost())
        .catch((err)=> alert(err))
      setCaption("");
      setContent("");
      setFileModal(false);
    }
  };

function deletePost(index) {
  
let updatePost = postData.filter((d,i)=>{
  return i != index
})

axios.put(`https://6560c27c83aba11d99d1778b.mockapi.io/user_details/${profileId}`, 
        {
        post: updatePost
        }
        )
        .then((res) => fetchPost())
        .catch((err)=> alert(err))
}

  return (
    <div  className="feedbar">
      {fileModal ? (
        <div className="file-modal">
          <label htmlFor="file">Paste Image Url Address</label>
          <input type="text" onChange={(e) => getContent(e)} value={content} />
        </div>
      ) : (
        ""
      )}
      <div className="upload-div">
        <div className="input-div">
          <img src={dp} alt="" />
          <input
            type="text"
            placeholder="What's in your mind abcdefgh?"
            onChange={(e) => getCaption(e)}
            value={caption}
          />
        </div>
        <hr />
        <div className="icons-div">
          <span onClick={(() => {setFileModal(!fileModal);setContent("");})}>
          <TbPhotoPlus /> <i>Photo</i>
          </span>
          <span >
            O <i>Video</i>
          </span>
          <span >
            O <i>Audio</i>
          </span>
          <span >
            O <i>Activity/Feelings</i>
          </span>
        </div>
        <div className="button-div">
          <button onClick={() => submitPost()}>Share</button>
        </div>
      </div>
      {postData?.map((data, index) => {
        return (
          <div
            className="post"
            style={{ minHeight: data.content ? "100vh" : "38vh" }}
            key={index}
          >
            <div className="id-div">
              <img src={dp} width={52} alt="" />
              <span>{userProfile.name}</span>
              <i>{data.date}</i>
              <b style={{cursor:"pointer"}} onClick={()=>deletePost(index)}><HiDotsVertical /></b>
            </div>

            {data.caption ? (
              <div className="caption-div">{data.caption}</div>
            ) : (
              ""
            )}

            {data.content ? (
              <div className="content-div">
                
                <img src={data.content.startsWith("https") || data.content.startsWith("http") ? data.content: customImg} alt="Something went wrong." />
              </div>
            ) : (
              ""
            )}
            <div className="action-icons-div">
              <span>O</span>
              <span>O</span>
              <span>O</span>
            </div>
            <div className="actions-div">
              <span>{`${data.like} likes, ${data.comment} comments`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Feedbar;
