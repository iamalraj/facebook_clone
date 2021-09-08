import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* dummy stories */}

            <Story image="https://wallpapercave.com/wp/wp3996081.jpg" profileSrc="https://t3.ftcdn.net/jpg/02/23/61/20/360_F_223612061_rzEjZHBIRBDMeeDXWqTGriYj3DdSHj3y.jpg" title="Amal Raj" />
            <Story image="https://img1.wallspic.com/previews/6/2/1/5/5/155126/155126-mid_size_car-cars-honda_accord-compact_car-bumper-x750.jpg" profileSrc="https://t3.ftcdn.net/jpg/02/23/61/20/360_F_223612061_rzEjZHBIRBDMeeDXWqTGriYj3DdSHj3y.jpg" title="John Doe" />
            <Story image="https://cutewallpaper.org/21/1080x1920-wallpapers-hd/1080x1920-Hd-Wallpaper-Wallpaper-Download-69-.jpg" profileSrc="https://t3.ftcdn.net/jpg/02/23/61/20/360_F_223612061_rzEjZHBIRBDMeeDXWqTGriYj3DdSHj3y.jpg" title="Bob" />
            <Story image="https://img1.wallspic.com/originals/8/2/1/5/5/155128-family_car-cars-bumper-mid_size_car-compact_car-1080x1920.jpg" profileSrc="https://t3.ftcdn.net/jpg/02/23/61/20/360_F_223612061_rzEjZHBIRBDMeeDXWqTGriYj3DdSHj3y.jpg" title="Alice" />
            <Story image="https://cutewallpaper.org/21/1080x1920-wallpapers-hd/1080x1920-Hd-Wallpaper-Wallpaper-Download-69-.jpg" profileSrc="https://t3.ftcdn.net/jpg/02/23/61/20/360_F_223612061_rzEjZHBIRBDMeeDXWqTGriYj3DdSHj3y.jpg" title="Eve" />
        </div>
    );
}

export default StoryReel
