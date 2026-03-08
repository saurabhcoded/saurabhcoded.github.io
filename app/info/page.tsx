import { PageHeader } from '@/app/components/page-header';
import { Title } from '@/app/components/title';
import Image from 'next/image';
import Link from 'next/link';

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
}[] = [
  {
    company: 'ITC Infotech',
    role: 'Senior Developer - Cloud App',
    date: 'Jan 2026 → Present',
    logo: '/itci-logo.jpg',
  },
  {
    company: 'Codefire Technologies',
    role: 'Software Developer',
    date: 'September 2023 → December 2025',
    logo: '/cf-logo.png',
  },
  {
    company: 'Govardhan Learning Cloud',
    role: 'Fullstack Developer',
    date: 'December 2022 → September 2023',
    logo: '/glcloud-logo.jpg',
  },
  {
    company: 'VRD Creative Pvt Ltd',
    role: 'Web Designer',
    date: 'May 2021 → June 2022',
    logo: '/vrd-logo.jpg',
  },
];

export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg">
        <p>
          Hi there, I&apos;m Saurabh. I design and build scalable digital platforms across web, mobile, and cloud environments.
        </p>
        <p>
          My work focuses on developing robust APIs, distributed systems, and cloud-native applications that power reliable, high-performance software used in real production environments.
        </p>

        <p>
          I also work on integrating AI capabilities into modern applications to improve automation, intelligence, and user experience. With a strong focus on system architecture, security, and performance optimization, I aim to build resilient platforms that can scale efficiently as products grow.
        </p>

        <p>
          If you&apos;re interested in working together, feel free to reach out
          to me here:{' '}
          <Link href="mailto:saurabhcoded@gmail.com">saurabhcoded@gmail.com</Link>.
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8 ">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {experience.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={56}
                  height={56}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-14 h-14 rounded-xl"
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 text-xl font-semibold">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">{exp.role}</span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>
    </main>
  );
}
