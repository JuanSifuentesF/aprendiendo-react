import './App.css'
import './index.css'
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const users = [
    {
        index: 0,
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        index: 1,
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        index: 2,
        userName: 'justopancho',
        name: 'Pancho Justo',
        isFollowing: false
    },
    {
        index: 3,
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App() {
    return (
        <section className={"App"}>
            {
                users.map(({ index, userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={index}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </section>

    )
}

