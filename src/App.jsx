import styles from "./style";
import {
  CardDeal,
  Clients,
  Business,
  Billing,
  CTA,
  Projects,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary bg-bill-pattern bg-blend-multiply w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div
        className={`bg-primary bg-bill-pattern bg-blend-color-dodge  ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Projects />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
