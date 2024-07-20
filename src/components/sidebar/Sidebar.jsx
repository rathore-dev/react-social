import './sidebar.css';
import { RssFeed , WorkOutline , HelpOutline , Event , School , Chat} from '@mui/icons-material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriend from '../closeFriend/CloseFriend';
import { User } from '../../dummyData';

export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className='sidebarIcon'/>
                    <span className="sidebarListItemText">Feed </span>
                </li>
                <li className="sidebarListItem">
                    <Chat className='sidebarIcon'/>
                    <span className="sidebarListItemText">Chat </span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Video</span>
                </li>
                <li className="sidebarListItem">
                    <PeopleAltIcon className='sidebarIcon'/>
                    <span className="sidebarListItemText">Group</span>
                </li>
               
                <li className="sidebarListItem">
                    <HelpOutline className='sidebarIcon'/>
                    <span className="sidebarListItemText">Questions </span>
                </li>
                <li className="sidebarListItem">
                    <School className='sidebarIcon'/>
                    <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className='sidebarIcon'/>
                    <span className="sidebarListItemText"> Events</span>
                </li>
                    <li className="sidebarListItem">
                        <SchoolIcon className='sidebarIcon'/>
                        <span className="sidebarListItemText">Covers</span>
                    </li>
            </ul>
            <button className='sidebarBtn'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebarFriendList'>
               {User.map(u=>(
                <CloseFriend key={u.id} user={u}/>
               ))}
                
            </ul>
        </div>
    </div>
    </>
  )
}
