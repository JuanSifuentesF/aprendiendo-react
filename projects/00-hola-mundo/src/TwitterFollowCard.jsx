import {useState} from "react";


export function TwitterFollowCard({ children ,userName, initialIsFollowing }) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Seguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }


    return(
        <article className={'tw-followCard'}>
            <header className={'tw-followCard-header'}>
                <img
                    className={'tw-followCard-avatar'}
                    src={`https://unavatar.io/${userName}`}
                    alt="Profile Picture"/>
                <div className={"tw-followCard-info"}>
                    <strong>{children}</strong>
                    <span className={"tw-followCard-infoUserName"}>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className={"tw-followCard-text"}>{text}</span>
                    <span className={"tw-followCard-stopFollow"}>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

//https://pbs.twimg.com/profile_images/1507177089123987458/IKF-yeje_400x400.jpg