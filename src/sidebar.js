import React from 'react';
import './sideBar.css';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function SideBar() {
    return (
        <div className='sidebar'>

            <div className='sidebar__header'>
                <Avatar src='https://content.internetvideoarchive.com/content/hdphotos/10672/010672/010672_1280x720_783721_023.jpg'></Avatar>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>

                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined></SearchOutlined>
                    <input placeholder="Search or start new chat" type="text"></input>
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default SideBar;