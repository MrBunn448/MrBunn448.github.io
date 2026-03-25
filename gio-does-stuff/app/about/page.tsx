export default function AboutPage() {
  return (
    <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex h-full w-full max-w-5xl flex-col items-center justify-center py-6 px-6">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50 text-center">About</h1>

          <section className="mt-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Student</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-700 dark:text-zinc-300">
              I&apos;m a student at <strong>Fontys University of Applied Sciences</strong>. I am currently focused on software engineering. And I hope to share some of the projects I work on right here.
            </p>

            <hr className="my-6 border-zinc-100 dark:border-zinc-800" />

            <h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Contact</h3>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">Feel free to reach out at any of the following places:</p>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3">
              <a
                href="mailto:giodoesprogramming@gmail.com"
                className="inline-flex items-center gap-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                aria-label="Email Giovanni"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7A2.5 2.5 0 0 0 18.5 6h-13A2.5 2.5 0 0 0 3 8.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.5L12 13 3 8.5" />
                </svg>
                <span className="text-sm font-medium">giodoesprogramming@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/giovanni-schmidt-347ba0178/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                aria-label="LinkedIn profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4zM8.5 8h3.78v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.66 4.78 6.12V20H16.1v-5.28c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.79V20H8.5z" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="https://github.com/MrBunn448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-4 py-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                aria-label="GitHub profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.86 3.14 8.98 7.5 10.44.55.1.75-.24.75-.53v-1.86c-3.04.66-3.69-1.46-3.69-1.46-.5-1.28-1.22-1.62-1.22-1.62-.99-.67.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.43-.28-4.98-1.21-4.98-5.38 0-1.19.42-2.16 1.12-2.92-.11-.28-.49-1.41.11-2.94 0 0 .9-.29 2.95 1.12A10.2 10.2 0 0 1 12 6.8c.91.004 1.83.12 2.69.35 2.05-1.41 2.95-1.12 2.95-1.12.6 1.53.22 2.66.11 2.94.7.76 1.12 1.73 1.12 2.92 0 4.18-2.56 5.09-5 5.36.39.33.73.98.73 1.99v2.95c0 .29.2.64.76.53 4.36-1.46 7.5-5.58 7.5-10.44C23.25 5.48 18.27.5 12 .5z" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
          </section>

          <section className="mt-6 bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-lg p-6">
            <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">Personal</h2>
            <p className="mt-3 text-lg leading-7 text-zinc-700 dark:text-zinc-300">
              Outside of learning about software, I enjoy a variety of other things such as:
            </p>
            <hr className="my-6 border-zinc-100 dark:border-zinc-800" />
            <ul className="mt-4 list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>Bouldering — indoor rock climbing</li>
              <li>The gym — strength training and staying active</li>
              <li>Video games — relaxing and playing games like Satisfactory & Stardew Valley</li>
            </ul>

            <div className="mt-4">
              <a
                href="https://steamcommunity.com/profiles/76561199203821591/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition"
                aria-label="Steam profile"
              >
                <img src="/steam-svgrepo-com.svg" alt="Steam logo" className="h-4 w-4" />
                <span className="text-sm font-medium">Steam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
