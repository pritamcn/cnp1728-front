import Link from 'next/link'

export default function NotFound() {
  return (
      <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div class="container flex flex-col items-center justify-center text-center px-5 mx-auto my-8">
          
            <h2 class="mb-8 font-extrabold text-9xl text-blue-900">
              404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
            <p class="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
            <Link rel="noopener noreferrer" href="/" class="btn c-btn c-btn--gradient-dark">Back to homepage</Link>
          
        </div>
      </section>
  )
}