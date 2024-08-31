import "./rightbar.css";
import { User } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayConatainer">
            <img
              src="./assets/person/image-06.jpg"
              alt=""
              className="birthdayImg"
            />
            <span className="birthdayText">
              <b> Narendra Modi</b> and <b>3 other friends</b>have birtday today
              !!
            </span>
          </div>
          <img
            className="rightbarAd"
            src="./assets/person/image-03.jpg"
            alt=""
          />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {User.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    )
  }

const ProfileRightBar = ()=>{
  return(
    <>
    <h4 className="rightabarTitle">User Information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">From:</span>
        <span className="rightbarInfoValue">Madrid</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">Realtionship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfokey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User Friendss</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH </span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH</span>
      </div>
      <div className="rightbarFollowing">
        <img src="./assets/person/image-01.webp" alt="" className="rightbarFollowingImg" />
      <span className="rightbarFollowingName"> ABCDEFGH</span>
      </div>
      
      
    </div>
   
    
    
    
    
    </>
  )
}

  return (
    <>
      <div className="rightbar">
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightbar/>}
        </div>
      </div>
    </>
  );
}
