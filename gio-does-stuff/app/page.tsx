export default function Home() {
  return (
    <div className="flex h-[calc(100vh-64px)] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-full w-full max-w-3xl flex-col items-center justify-center py-8 px-6 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Gio Does Stuff.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This website is under construction.
          </p>

          <div className="w-full max-w-md mt-4">
            <div className="rounded overflow-hidden shadow-sm" style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/F8aJhF9sWsI"
                title="Gio Does Stuff video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
