export default function UserBubble({ name, email }) {
    return (
        <div className="user-bubble">
            <p>{name} {email}</p>
        </div>
    );
}
