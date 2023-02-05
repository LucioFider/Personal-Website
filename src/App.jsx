import styles from "./style";
import {
  Button,
  CardDeal,
  Clients,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>navbar</div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>Hero</div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats business Billing card Deal testimonials Clients CTA Footer
        </div>
      </div>
    </div>
  );
}

export default App;
