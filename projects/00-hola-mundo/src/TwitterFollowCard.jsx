export function TwitterFollowCard({userName, name, image, isFollowing}) {
    return(
        <article className={'tw-followCard'}>
            <header className={'tw-followCard-header'}>
                <img
                    className={'tw-followCard-avatar'}
                    src={image}
                    alt="Profile Picture"/>
                <div className={"tw-followCard-info"}>
                    <strong>{name}</strong>
                    <span className={"tw-followCard-infoUserName"}>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={"tw-followCard-button"}>
                    Seguir
                </button>
            </aside>
        </article>
    )
}

//https://pbs.twimg.com/profile_images/1507177089123987458/IKF-yeje_400x400.jpg