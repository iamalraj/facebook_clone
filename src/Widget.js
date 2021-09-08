import React from 'react';
import './Widget.css';

function Widget() {
    return (
        <div className="widget">
            <iframe title="myFrame" 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Finstagram%2F&tabs=timeline&width=315&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="315" 
            height="100%" 
            style={{border:"none", overflow:"hidden"}}
            scrolling="no" 
            frameBorder="0" 
            allowFullScreen={true} 
            allow="encrypted-media">
            </iframe>
        </div>
    );
}

export default Widget
