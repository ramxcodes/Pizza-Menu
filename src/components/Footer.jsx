//src/components/Footer.jsx

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
        <p>
          We&apos;re Open Until {closeHour}:00. Come visit us or order online.{" "}
        </p>
        <button className="btn">Order</button>
        </div>
      ) : <p>We are happy to serve you in between {openHour}:00 & {closeHour}:00. </p>}
    </footer>
  );
}

export default Footer;
