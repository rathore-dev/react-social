import "./topbar.css";
import { Search , Person , Chat , Notifications } from "@mui/icons-material";

 
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">GrandSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for any Videos" type="text" className="searchInput" />
          {/* <div className="searchBoxExpand"></div> */}
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Page</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <img src="/assets/person/image-01.webp" alt=""  className="topbarImg"/>
      </div>
    </div>
  )
}
