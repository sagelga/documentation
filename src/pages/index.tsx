import React, {useEffect, useRef, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

interface Project {
  name: string;
  path: string;
  description: string;
  tech: string;
}

interface ProjectGroup {
  title: string;
  description: string;
  projects: Project[];
}

const GROUPS: ProjectGroup[] = [
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
      },
      {
        name: 'Reverse Notion Sync',
        path: '/docs/reverse-notion-sync',
        description: 'Button-triggered sync from KV back into Notion pages',
        tech: 'Cloudflare Workers, KV, Notion API',
      },
      {
        name: 'Todoist to KV',
        path: '/docs/todoist-to-cloudflarekv',
        description: 'Webhook receiver that stores Todoist events in KV',
        tech: 'Cloudflare Workers, KV',
      },
      {
        name: 'Todoist to Notion',
        path: '/docs/todoist-to-notion',
        description: 'Webhook receiver that syncs Todoist events directly to Notion',
        tech: 'Cloudflare Workers, Notion API',
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
      },
      {
        name: 'Status Pulse',
        path: '/docs/statuspage-pulse',
        description: 'Per-minute health check worker that writes to R2',
        tech: 'Cloudflare Workers, R2',
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
      },
      {
        name: 'Redirect',
        path: '/docs/redirect',
        description: 'URL shortener backed by Cloudflare KV',
        tech: 'Cloudflare Workers, KV',
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
        description: 'LINE LIFF approval workflow application',
        tech: 'LINE LIFF, Google Apps Script',
      },
      {
        name: 'Codenames',
        path: '/docs/codenames',
        description: 'Word list generator for the Codenames board game',
        tech: 'Python',
      },
      {
        name: 'Data Journal',
        path: '/docs/data-journal',
        description: 'Data science project documentation and notebooks',
        tech: 'Python, Jupyter',
      },
      {
        name: 'Oh Sheet!',
        path: '/docs/oh-sheet',
        description: 'Google Sheets automation toolkit',
        tech: 'Google Apps Script',
      },
      {
        name: 'Point of Sales',
        path: '/docs/compro-project',
        description: 'Point-of-sale system for a computer programming course',
        tech: 'Java',
      },
      {
        name: 'Project Panda',
        path: '/docs/panda',
        description: 'LINE chatbot for university course registration',
        tech: 'Python, LINE Messaging API',
      },
      {
        name: 'Trash Melody',
        path: '/docs/trashmelody',
        description: 'Rhythm game promoting waste sorting awareness',
        tech: 'Java, libGDX',
      },
    ],
  },
];

function ProjectCard({name, path, description, tech, index}: Project & {index: number}) {
  return (
    <Link
      to={path}
      className={styles.card}
      style={{'--i': index} as React.CSSProperties}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardTech}>{tech}</span>
    </Link>
  );
}

function ProjectSection({title, description, projects}: ProjectGroup) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {threshold: 0.15},
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={clsx(styles.section, visible && styles.sectionVisible)}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionDescription}>{description}</p>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.path} {...project} index={i} />
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
            Technical documentation for {totalProjects} projects --
            Cloudflare Workers, web applications, and integrations.
          </p>
        </div>
      </header>
      <main className="container">
        {GROUPS.map((group) => (
          <ProjectSection key={group.title} {...group} />
        ))}
      </main>
    </Layout>
  );
}
