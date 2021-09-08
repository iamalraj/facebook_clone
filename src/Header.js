import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import{Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";



function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="header">
            
            <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt=""/>
                <div class="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="header__middle">
                <div class="header__options header__options--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div class="header__options">
                    <FlagIcon fontSize="large" />
                </div>
                <div class="header__options">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div class="header__options">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div class="header__options">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            
            
            <div className="header__right"></div>
                <div class="header__info">
                    <Avatar src = {user.photoURL}/>
                    <h4>{user.displayName}</h4>
            </div>
            <IconButton>
            <AddIcon />
            </IconButton>
            <IconButton>
            <ForumIcon />
            </IconButton>
            <IconButton>
            <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
            <ExpandMoreIcon />
            </IconButton>

        </div>
    );
}

export default Header
