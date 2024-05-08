import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals">Meals Page</Link>
      <Link href="/meals/share">Meals Share</Link>
      <Link href="/meals/meals-1">Meal 1 Page</Link>
      <Link href="/meals/meals-2">Meal 2 Page</Link>
      <Link href="/community">Community</Link>
    </main>
  );
}
