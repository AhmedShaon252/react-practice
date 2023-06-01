import React from 'react';

export default function HoverCounter({count, incrementCount, theme, switchTheme}){
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return(
        <div>
            <h2 onMouseOver={incrementCount} style={style}>
                Hovered {count} times
            </h2>
            <button type='button' onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    )
}