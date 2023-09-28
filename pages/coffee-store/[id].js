import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import Head from 'next/head';
import cls from 'classnames'

import coffeeStores from '../../data/coffee-stores.json'
import styles from '../../styles/coffee-store.module.css'
import Image from 'next/image';

export async function getStaticProps(context) {
  const { params } = context;
  let coffeeStore =coffeeStores.find((coffeeStore) => {
    return coffeeStore.id == params.id
  });

  return {
    props: {
      coffeeStore
    }
  }
}

export function getStaticPaths() {
  const paths = coffeeStores.map(cs => {
    return {
      params : { id: cs.id.toString()}
    }
  })
  return {
      paths,
    fallback: true
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore

  const handleUpvoteButton = () => {
    console.log('upvote')
  }
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
        <meta name="description" content={`${name} coffee store`} />
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={
              imgUrl ||
              "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            }
            width={600}
            height={380}
            className={styles.storeImg}
            alt={name}
          />
        </div>

        <div className={cls("glass", styles.col2)}>
          {address && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/places.svg"
                width="24"
                height="24"
                alt="places icon"
              />
              <p className={styles.text}>{address}</p>
            </div>
          )}
          {neighbourhood && (
            <div className={styles.iconWrapper}>
              <Image
                src="/static/icons/nearMe.svg"
                width="24"
                height="24"
                alt="near me icon"
              />
              <p className={styles.text}>{neighbourhood}</p>
            </div>
          )}
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width="24"
              height="24"
              alt="star icon"
            />
            {/* <p className={styles.text}>{votingCount}</p> */}
          </div>

          <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore 