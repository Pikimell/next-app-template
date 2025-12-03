import styles from "./page.module.css";

const highlights = [
  {
    title: "Чистий старт",
    description: "Ніяких зайвих залежностей або API – лише базовий Next.js з TypeScript.",
    accent: "base",
  },
  {
    title: "Стиль та структура",
    description: "Готовий глобальний стиль, приклад сторінки та метадані, щоб одразу будувати інтерфейс.",
    accent: "ui",
  },
  {
    title: "Лінтинг та форматування",
    description: "ESLint + Prettier за замовчуванням, щоб тримати код охайним з першого коміту.",
    accent: "tooling",
  },
];

const steps = [
  "npm install",
  "npm run dev",
  "Очищуєш цю сторінку та створюєш власні маршрути у папці app",
  "Додаєш компоненти, API-роути або будь-який інший потрібний функціонал",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <span className={styles.badge}>Next.js 16 + React 19</span>
          <h1>
            Базовий темплейт для швидкого запуску нового проєкту на Next.js
          </h1>
          <p className={styles.lead}>
            Мінімальний набір файлів, продумана стилізація та готові налаштування
            лінтера. Просто запускай і будуй потрібний функціонал.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
              Документація Next.js
            </a>
            <code className={styles.command}>npm run dev</code>
          </div>
          <div className={styles.meta}>
            <span>TypeScript увімкнено</span>
            <span>Експортовані метадані</span>
            <span>ESLint + Prettier</span>
          </div>
        </section>

        <section className={styles.grid}>
          {highlights.map((item) => (
            <article key={item.title} className={styles.card} data-accent={item.accent}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </section>

        <section className={styles.checklist}>
          <div className={styles.sectionHeader}>
            <p className={styles.kicker}>Швидкий старт</p>
            <h2>Що зробити після клонування</h2>
          </div>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
