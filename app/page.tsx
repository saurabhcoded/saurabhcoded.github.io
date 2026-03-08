import Link from 'next/link';
import { ArticleLink } from './components/article-link';
import { getAllPosts } from '@/lib/articles';
import { Title } from '@/app/components/title';

export default async function Home() {
  const posts = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
  });
  const works = await getAllPosts({
    includeDrafts: process.env.NODE_ENV === 'development',
    isWork: true,
    limit: 4
  });

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 border-b border-slate-300 mb-14">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Helo, I’m Saurabh.
          <span className="block text-slate-500 font-normal text-2xl">
            A software developer from India.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
            I focus on building scalable web platforms and cloud-native systems while integrating AI capabilities into modern applications. I design robust APIs, distributed architectures, and high-performance services with strong emphasis on security, scalability, and reliable enterprise-grade software.
        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          More Information{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16">
        <Title as="h2" variant="secondary" className="mb-4">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg">
          Below is a selection of recent projects that I&apos;ve worked on.
        </p>
        <section className="py-5 divide-y divide-slate-200">
          {works.map((post) => {
            return (
              <ArticleLink
              key={post.meta.title}
              href={post.href}
              title={post.meta.title}
              summary={post.meta.description}
              date={post.date}
            />
            );
          })}
        </section>
        <Link
          href="/projects"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View older projects
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pt-10 pb-16">
        <Title as="h2" variant="secondary" className="mb-8">
          Recent Writing
        </Title>
        <div className="divide-y divide-slate-200">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post?.meta.title}
                href={post.href}
                title={post.meta.title}
                date={post?.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white"
        >
          View More Posts{' '}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>
    </main>
  );
}
