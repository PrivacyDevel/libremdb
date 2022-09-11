/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Meta from '../../components/Meta/Meta';
import Layout from '../../layouts/Layout';

import styles from '../../styles/modules/pages/about/about.module.scss';

const About = () => {
  return (
    <>
      <Meta
        title='About'
        description='libremdb is a free & open source IMDb front-end. It allows you to see information about movies, tv shows, video games without any ads or tracking.'
      />
      <Layout full className={styles.about}>
        <section id='features' className={styles.features}>
          <h2
            className={`heading heading__secondary ${styles.features__heading}`}
          >
            Some features
          </h2>
          <ul className={styles.features__list}>
            <li className={styles.feature}>
              <svg
                aria-hidden='true'
                focusable='false'
                role='img'
                className={styles.feature__icon}
              >
                <use href='/svg/sprite.svg#icon-eye-slash'></use>
              </svg>
              <h3
                className={`heading heading__tertiary ${styles.feature__heading}`}
              >
                No ads or tracking
              </h3>
              <p className={styles.feature__text}>
                Browse any movie info without being tracked or bombarded by
                annoying ads.
              </p>
            </li>
            <li className={styles.feature}>
              <svg
                aria-hidden='true'
                focusable='false'
                role='img'
                className={styles.feature__icon}
              >
                <use href='/svg/sprite.svg#icon-palette'></use>
              </svg>
              <h3
                className={`heading heading__tertiary ${styles.feature__heading}`}
              >
                Modern interface
              </h3>
              <p className={styles.feature__text}>
                Modern interface with curated colors supporting both dark and
                light themes.
              </p>
            </li>
            <li className={styles.feature}>
              <svg
                aria-hidden='true'
                focusable='false'
                role='img'
                className={styles.feature__icon}
              >
                <use href='/svg/sprite.svg#icon-responsive'></use>
              </svg>
              <h3
                className={`heading heading__tertiary ${styles.feature__heading}`}
              >
                Responsive design
              </h3>
              <p className={styles.feature__text}>
                Be it your small mobile or big computer screen, it's fully
                responsive.
              </p>
            </li>
          </ul>
        </section>
        <section id='faq' className={styles.faqs}>
          <h2 className={`heading heading__secondary ${styles.faqs__heading}`}>
            Questions you may have
          </h2>
          <div className={styles.faqs__list}>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>Why is it slow?</summary>
              <p className={styles.faq__description}>
                Whenever you request info about a movie/show on libremdb, 4
                trips are made(2 between your browser and libremdb's server, and
                2 between libremdb's server and IMDb's server) instead of the
                usual 2 trips when you visit a website. For this reason there's
                a noticable delay. This is a bit of inconvenience you'll have to
                face should you wish to use this website.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                It doesn't have all routes.
              </summary>
              <p className={styles.faq__description}>
                I'll implement more with time :)
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                I see connection being made to some Amazon domains.
              </summary>
              <p className={styles.faq__description}>
                For now, images and videos are directly served from Amazon. If I
                have enough time in the future, I'll implement a way to serve
                the images from libremdb instead.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                Will Amazon track me then?
              </summary>
              <p className={styles.faq__description}>
                They may log your IP address, useragent, and other such
                identifiers. I'd recommend using a VPN, or accessing the website
                through TOR for mitigating this risk.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                Why not just use IMDb?
              </summary>
              <p className={styles.faq__description}>
                Refer to the{' '}
                <a className='link' href='#features'>
                  features section
                </a>{' '}
                above.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                Why didn't you use other databases like TMDB or OMDb?
              </summary>
              <p className={styles.faq__description}>
                IMDb simply has superior dataset compared to all other
                alternatives. With that being said, I'd encourage you to check
                out those alternatives too.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                Your website name is quite, ehm, lame.
              </summary>
              <p className={styles.faq__description}>
                Let's just say I'm not very good at naming things.
              </p>
            </details>
            <details className={styles.faq}>
              <summary className={styles.faq__summary}>
                I have some ideas/features/suggestions.
              </summary>
              <p className={styles.faq__description}>
                That's great! I've a couple of{' '}
                <Link href='/contact'>
                  <a className='link'>contact methods</a>
                </Link>
                . Send your beautiful suggestions(or complaints), or just drop a
                hi.
              </p>
            </details>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
