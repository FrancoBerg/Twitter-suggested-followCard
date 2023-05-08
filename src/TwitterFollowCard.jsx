import { useState } from "react"

export function TwitterFollowCard ({ userName, name}) {
    
    const [isFollowing, setFollowing] = useState(false)

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setFollowing(!isFollowing)
    }

    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                className="tw-followCard-avatar"
                alt="Avatar mio" 
                src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}