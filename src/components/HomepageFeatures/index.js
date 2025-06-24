import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Getting Started',
        link: '/category/get-started',
        description: (
            <>
                Learn about the most important Astroid concepts through step-by-step guides. Highly recommended to go through everything from the start to the end.
            </>
        ),
    },
    {
        title: 'Widgets',
        link: '/category/widgets',
        description: (
            <>
                Widgets are the building blocks of Astroid's user interface. They allow you to create dynamic and interactive components that enhance the user experience.
            </>
        ),
    },
    {
        title: 'Extensions',
        link: '/category/extensions',
        description: (
            <>
                The Extensions section of the Astroid Framework documentation provides comprehensive information on the various extensions available to enhance your website's functionality.
            </>
        ),
    },
    {
        title: 'Layout Builder',
        link: '/category/layout-builder',
        description: (
            <>
                Layout Builder is a powerful tool for creating custom layouts in Astroid Framework. It allows you to design complex page structures using a drag-and-drop interface, making it easy to build responsive and visually appealing websites without writing code.
            </>
        ),
    },
    {
        title: 'Styling',
        link: '/category/styling',
        description: (
            <>
                The Style System is responsible for dynamic CSS generation, theming, and styling management within the Astroid Framework.
            </>
        ),
    },
    {
        title: 'Developer Guilds',
        link: '/category/developer-guilds',
        description: (
            <>
                The purpose of this guide is to give developers an up to date guide showing best practice in writing and maintaining Astroid Widgets or modify Astroid.
            </>
        ),
    },
];

function Feature({link, title, description}) {
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
        <div className="card padding--lg feature-card">
            <div className="text--left">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
            <a href={link} className="button button--secondary button--lg">Read the Docs</a>
        </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
