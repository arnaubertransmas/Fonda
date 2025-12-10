// app/welcome/page.js
export default async function WelcomePage() {
  const res = await fetch("http://localhost:3001/welcome");
  const data = await res.json();

  return (
    <div>
      <h1>Welcome Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
