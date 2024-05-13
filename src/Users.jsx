
import { Image } from "./Image";

export const Users = ({users, setUsers}) => {
    const handleVote = (id) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === id ? { ...user, votes: user.votes + 1 } : user
            )
        );
        console.log(users)
    };

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id} onClick={() => handleVote(user.id)}>
                    <Image color={user.color} />
                    {user.name} - Votes: {user.votes}
                </li>
            ))}
        </ul>
    )
}