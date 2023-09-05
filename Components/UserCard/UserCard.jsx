export default function UserCard({ data }) {
  const { name, login, avatar_url } = data;

  return (
    <div className="user-card">
      <div>
        <img src={avatar_url} alt="avatar" />
      </div>
      <div>
        <h5>Name: {name}</h5>
        <p>Username: {login}</p>
      </div>
    </div>
  );
}
