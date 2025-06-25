import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Getting Started',
        link: '/category/getting-started',
        description: (
            <>
                Learn about the most important Astroid concepts through step-by-step guides. Highly recommended to go through everything from the start to the end.
            </>
        ),
    },
    {
        title: 'Basic Settings',
        link: '/category/basic-settings',
        description: (
            <>
                User guide for basic website settings such as Preloader, Color Mode, Favicon, Page Settings, Smooth Scroll, Bootstrap libraries, Wide or Box layout, and more.
            </>
        ),
    },
    {
        title: 'Header Modes',
        link: '/category/header',
        description: (
            <>
                This section covers the header settings of the Astroid Framework, including configuration options for the header layout, styles, and behaviors.
            </>
        ),
    },
    {
        title: 'Styling',
        link: '/category/styling',
        description: (
            <>
                The documentation guides you through the functions to edit your site's style such as Typography, Colors, Themes, Presets, as well as different ways to customize the style.
            </>
        ),
    },
    {
        title: 'Layout Builder',
        link: '/category/layout-builder',
        description: (
            <>
                Astroid Framework’s Layout Builder allows users to easily design responsive page layouts with drag-and-drop functionality and flexible customization options.
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
                Astroid Framework offers a variety of powerful extensions that help users quickly build, customize, and enhance their website with ease and flexibility.
            </>
        ),
    },
    {
        title: 'Custom Code',
        link: '/category/custom-code',
        description: (
            <>
                Astroid Framework’s Custom CSS and JS feature allows users to add custom code easily, enabling advanced styling and functionality without modifying core files.
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
