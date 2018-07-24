import React from 'react';

const styles = {
    badge_container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    badge_content: {

    },
    badge: {
        backgroundColor: 'blue',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 4
    }
}
const Badge = (props) => {
    //const { label, number}
    const { badge_container, badge_content, badge } = styles; 
    return (
        <div style={badge_container}>
            <div style={badge_content}>
                Hello
             </div>
            <div style={badge}>
                3
             </div>
        </div>
    )
}

export default Badge