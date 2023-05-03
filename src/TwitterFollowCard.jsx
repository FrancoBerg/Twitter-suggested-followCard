import { useState } from "react"

export function TwitterFollowCard ({ userName, name}) {
    
    const [isFollowing, setFollowing] = useState(false)

    const imgSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'seguir'
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
                    {text}
                </button>
            </aside>
        </article>
    )
}