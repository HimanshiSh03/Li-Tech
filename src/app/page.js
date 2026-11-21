import SeatMap from "../components/SeatMap";

const features = [
  ["Attendance without the register", "Students check in from a link. You see who is in right now and who hasn’t been seen for a week."],
  ["Seats that stay reserved", "Give regulars a fixed seat or open daily booking. Everyone can see what’s taken."],
  ["Fees you don’t have to chase", "Set your monthly plans, record payments, and see who is due before they walk in."],
  ["Students can find you", "Your library gets a public page with timings, fees and free seats. Students can send questions straight to you."],
];

export default function Home() {
  return (
    <>
      <header className="wrap nav">
        <a className="logo" href="/">
  <span className="mark" aria-hidden="true">L</span>
  Li Tech
</a>
        <a className="btn small" href="#access">Get early access</a>
      </header>

      <main>
        <section className="wrap hero">
          <div>
            <h1>Retire the paper register.</h1>
            <p className="lead">
              Li Tech helps libraries and study rooms manage attendance, seats and fees from one simple page. Works in any browser, nothing to install.
            </p>
            <div className="actions">
              <a className="btn" href="#access">Get early access</a>
              <a className="btn ghost" href="#features">See what it does</a>
            </div>
          </div>
          <SeatMap />
        </section>

        <section id="features" className="wrap features">
          <h2>Everything a busy library does in a day</h2>
          {features.map(([title, text]) => (
            <div className="row" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </section>

        <section className="wrap two">
          <div>
            <h3>For library owners</h3>
            <p>Run the whole place from your phone. Attendance, seat plans, fee records and student queries all sit in one dashboard.</p>
          </div>
          <div>
            <h3>For students</h3>
            <p>Search for a library near you, check fees and free seats, and ask your questions without standing in a queue.</p>
          </div>
        </section>

        <section id="access" className="wrap cta">
          <h2>Want Li Tech at your library?</h2>
          <p>We’re onboarding the first few libraries. Tell us about yours and we’ll set it up with you.</p>
          <a className="btn" href="mailto:hello@litech.example?subject=Li%20Tech%20early%20access">Email us</a>
        </section>
      </main>

      <footer className="wrap foot">© {new Date().getFullYear()} Li Tech</footer>
    </>
  );
}