import styles from '@/styles/page.module.css';

export default function Hobbies() {
  const hobbies = ['Programowanie', 'Gry komputerowe', 'Czytanie książek', 'Wycieczki rowerowe'];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Moje Zainteresowania</h1>
      <ul className={styles.list}>
        {hobbies.map((hobby, index) => (
          <li key={index} className={styles['list-item']}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
