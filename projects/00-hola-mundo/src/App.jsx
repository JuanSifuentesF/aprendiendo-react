import './App.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

export function App() {
    return (
        <>
            <TwitterFollowCard userName={"Juan Sifuentes"}
                               image={"https://pbs.twimg.com/profile_images/1507177089123987458/IKF-yeje_400x400.jpg"}
                               name={"Juan Sifuentes"}/>
            <TwitterFollowCard userName={"Juan Sifuentes"}
                               image={"https://pbs.twimg.com/profile_images/1507177089123987458/IKF-yeje_400x400.jpg"}
                               name={"Juan Sifuentes"}/>
            <TwitterFollowCard userName={"Juan Sifuentes"}
                               image={"https://pbs.twimg.com/profile_images/1507177089123987458/IKF-yeje_400x400.jpg"}
                               name={"Juan Sifuentes"}/>
        </>

    )
}

