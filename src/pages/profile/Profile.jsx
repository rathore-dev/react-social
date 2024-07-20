import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">

                <img className="profileCoverImg" src="./assets/person/image-08.jpg" alt="" />
                <img className="profileUserImg" src="./assets/person/image-09.jpg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Siddharth Rathore</h4>
                    <span className="profileInfoDesc">Hello my Fiend !</span>
                </div>

            </div>
            <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
        </div>
        </div>
      </div>
    </>
  );
}
