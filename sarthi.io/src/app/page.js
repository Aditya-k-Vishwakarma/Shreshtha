import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all needs!</p>
      </header>
      <main className={styles.main}>
        <section className={styles.card}>
          <h2>About Us</h2>
          <p>Learn more about our mission and values.</p>
        </section>
        <section className={styles.card}>
          <h2>Services</h2>
          <p>Explore the services we offer to make your life easier.</p>
        </section>
        <section className={styles.card}>
          <h2>Contact</h2>
          <p>Have questions? Get in touch with us!</p>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}
