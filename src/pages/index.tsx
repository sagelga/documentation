import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

interface Project {
  name: string;
  path: string;
  description: string;
  tech: string;
  techKeys: string[];
}

interface ProjectGroup {
  title: string;
  description: string;
  projects: Project[];
}

const GROUPS: ProjectGroup[] = [
  {
    title: 'sagelga.com',
    description: 'Personal website and the Cloudflare Workers that power its content pipeline.',
    projects: [
      {
        name: 'sagelga.com',
        path: '/docs/super',
        description: 'Personal portfolio and blog',
        tech: 'Next.js, React, Tailwind CSS, TypeScript, Cloudflare',
        techKeys: ['nextdotjs', 'react', 'tailwindcss', 'typescript', 'cloudflare'],
      },
      {
        name: 'SuperEye',
        path: '/docs/supereye',
        description: 'Scheduled Notion sync worker — writes post metadata to KV every 15 minutes',
        tech: 'Cloudflare Workers, Notion API, KV',
        techKeys: ['cloudflare', 'notion'],
      },
      {
        name: 'SuperBrain',
        path: '/docs/superbrain',
        description: 'Blog API worker — serves post data from KV to sagelga.com',
        tech: 'Cloudflare Workers, KV',
        techKeys: ['cloudflare'],
      },
    ],
  },
  {
    title: 'ByteSide',
    description: 'ByteSide.one — Thai tech and AI news platform — and its content retrieval pipeline.',
    projects: [
      {
        name: 'ByteSide',
        path: '/docs/byteside',
        description: 'Thai tech and AI news platform',
        tech: 'Docusaurus, React, TypeScript, Cloudflare Pages',
        techKeys: ['react', 'typescript', 'cloudflare'],
      },
      {
        name: 'ByteSide Retriever',
        path: '/docs/byteside-retriever',
        description: 'Notion-to-KV content pipeline for ByteSide',
        tech: 'Cloudflare Workers, Notion API, TypeScript',
        techKeys: ['cloudflare', 'notion', 'typescript'],
      },
    ],
  },
  {
    title: 'Todoist Pipeline',
    description:
      'Cloudflare Workers that sync task data between Todoist, Cloudflare KV, and Notion.',
    projects: [
      {
        name: 'KV to Notion',
        path: '/docs/cloudflarekv-to-notion',
        description: 'Scheduled sync from Cloudflare KV to Notion database',
        tech: 'Cloudflare Workers, KV, Notion API',
        techKeys: ['cloudflare', 'notion'],
      },
      {
        name: 'Reverse Notion Sync',
        path: '/docs/reverse-notion-sync',
        description: 'Button-triggered sync from KV back into Notion pages',
        tech: 'Cloudflare Workers, KV, Notion API',
        techKeys: ['cloudflare', 'notion'],
      },
      {
        name: 'Todoist to KV',
        path: '/docs/todoist-to-cloudflarekv',
        description: 'Webhook receiver that stores Todoist events in KV',
        tech: 'Cloudflare Workers, KV',
        techKeys: ['cloudflare', 'todoist'],
      },
      {
        name: 'Todoist to Notion',
        path: '/docs/todoist-to-notion',
        description: 'Webhook receiver that syncs Todoist events directly to Notion',
        tech: 'Cloudflare Workers, Notion API',
        techKeys: ['todoist', 'notion'],
      },
    ],
  },
  {
    title: 'Monitoring',
    description:
      'Real-time service health monitoring for ByteSide.one infrastructure.',
    projects: [
      {
        name: 'Status Page',
        path: '/docs/statuspage',
        description: 'Public-facing status dashboard with 30-day history',
        tech: 'Next.js 16, Tailwind CSS, Cloudflare Pages',
        techKeys: ['cloudflare', 'nextdotjs', 'tailwindcss'],
      },
      {
        name: 'Status Pulse',
        path: '/docs/statuspage-pulse',
        description: 'Per-minute health check worker that writes to R2',
        tech: 'Cloudflare Workers, R2',
        techKeys: ['cloudflare'],
      },
    ],
  },
  {
    title: 'Web Apps',
    description: 'Standalone web applications.',
    projects: [
      {
        name: 'Mahjong Hands',
        path: '/docs/mahjong-hands',
        description: 'Mahjong hand validator and educational platform',
        tech: 'React 19, Vite, TypeScript, @dnd-kit',
        techKeys: ['react', 'vite', 'typescript'],
      },
      {
        name: 'Redirect',
        path: '/docs/redirect',
        description: 'URL shortener backed by Cloudflare KV',
        tech: 'Cloudflare Workers, KV',
        techKeys: ['cloudflare'],
      },
    ],
  },
  {
    title: 'Legacy',
    description: 'Older projects preserved for reference.',
    projects: [
      {
        name: 'Approval Workflow',
        path: '/docs/approval-workflow',
        description: 'Google Sheets approval workflow add-on',
        tech: 'Google Apps Script',
        techKeys: ['googlesheets'],
      },
      {
        name: 'Codenames',
        path: '/docs/codenames',
        description: 'Word list generator for the Codenames board game',
        tech: 'Python',
        techKeys: ['python'],
      },
      {
        name: 'Data Journal',
        path: '/docs/data-journal',
        description: 'Data science project documentation and notebooks',
        tech: 'Python, Jupyter',
        techKeys: ['python', 'jupyter'],
      },
      {
        name: 'Oh Sheet!',
        path: '/docs/oh-sheet',
        description: 'Lecture sheet sharing platform built as a university project',
        tech: 'Vue 2, Element UI, Parse',
        techKeys: ['vue'],
      },
      {
        name: 'Point of Sales',
        path: '/docs/compro-project',
        description: 'CLI point-of-sale system with sales and analytics tools',
        tech: 'C',
        techKeys: [],
      },
      {
        name: 'Project Panda',
        path: '/docs/panda',
        description: 'LINE chatbot for university course registration',
        tech: 'Python, LINE Messaging API',
        techKeys: ['python', 'line'],
      },
      {
        name: 'Trash Melody',
        path: '/docs/trashmelody',
        description: 'Rhythm game promoting waste sorting awareness',
        tech: 'Java, libGDX',
        techKeys: ['openjdk'],
      },
    ],
  },
];

const TECH_LABELS: Record<string, string> = {
  cloudflare: 'Cloudflare',
  notion: 'Notion',
  todoist: 'Todoist',
  nextdotjs: 'Next.js',
  tailwindcss: 'Tailwind CSS',
  react: 'React',
  vite: 'Vite',
  typescript: 'TypeScript',
  line: 'LINE',
  python: 'Python',
  jupyter: 'Jupyter',
  googlesheets: 'Google Sheets',
  openjdk: 'Java',
  vue: 'Vue.js',
};

function TechIcon({slug}: {slug: string}) {
  return (
    <img
      src={`/img/tech/${slug}.svg`}
      alt={TECH_LABELS[slug] || slug}
      width={16}
      height={16}
      className={styles.techIcon}
      loading="lazy"
    />
  );
}

function ProjectCard({name, path, description, tech, techKeys, index, featured}: Project & {index: number; featured: boolean}) {
  return (
    <Link
      to={path}
      className={clsx(styles.card, featured && styles.cardFeatured)}
      style={{'--i': index} as React.CSSProperties}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardFooter}>
        <div className={styles.techIcons} aria-hidden="true">
          {techKeys.map(key => (
            <TechIcon key={key} slug={key} />
          ))}
        </div>
        <span className={styles.cardTech}>{tech}</span>
      </div>
    </Link>
  );
}

function ProjectSection({title, description, projects, groupIndex}: ProjectGroup & {groupIndex: number}) {
  return (
    <section
      className={styles.section}
      style={{'--i-section': groupIndex} as React.CSSProperties}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionIndex} aria-hidden="true">
          {String(groupIndex + 1).padStart(2, '0')}
        </span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <p className={styles.sectionDescription}>{description}</p>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.path} {...project} index={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const totalProjects = GROUPS.reduce((sum, group) => sum + group.projects.length, 0);

  return (
    <Layout description="Project documentation and technical references by sagelga">
      <header className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>sagelga docs</h1>
          <p className={styles.heroSubtitle}>
            Technical documentation for {totalProjects} projects —
            Cloudflare Workers, web applications, and integrations.
          </p>
        </div>
      </header>
      <main className="container">
        {GROUPS.map((group, i) => (
          <ProjectSection key={group.title} {...group} groupIndex={i} />
        ))}
      </main>
    </Layout>
  );
}
