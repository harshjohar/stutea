import React from 'react'

export const Notification = (props) => {
    const notif = props.value;

    return (
        <div>
            {notif.type==="answered" ? `Someone answered your question ${notif.recents}, click to view it` : "Your response to this question is accepted, credits added to your account."}
        </div>
    )
}
