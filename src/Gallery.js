function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpeg"
      alt="Latherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
