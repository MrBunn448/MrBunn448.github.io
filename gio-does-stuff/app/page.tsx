export default function Home() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex h-full w-full max-w-5xl flex-col items-center justify-center py-6 px-6 bg-white dark:bg-black">

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Gio Does Stuff.
          </h1>

          <p className="w-full max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 pt-6">
            This website is under construction.
          </p>

          <div className="w-full flex justify-center mt-6 px-6 pb-8">
            <div style={{ position: 'relative', width: 'min(1000px, calc(100vw - 120px))', height: 'min(calc((100vw - 120px) * 9 / 16), 60vh)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.10)' }}>
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
