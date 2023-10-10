import Order from "./Order";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <>
      <footer id="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            `We are happy to welcome you between {openHour}:00 and {closeHour}
            :00.`
          </p>
        )}
      </footer>
    </>
  );
}
