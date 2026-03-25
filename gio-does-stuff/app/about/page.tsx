export default function AboutPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex h-full w-full max-w-5xl flex-col items-center justify-center py-6 px-6 bg-white dark:bg-black">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">About</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">Welcome — this site is a small showcase. More content coming soon.</p>
        </div>
      </main>
    </div>
  );
}
