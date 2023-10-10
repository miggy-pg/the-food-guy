import Container from "../Common/Container";
export default function PizzaList({ children }) {
  return (
    <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-0">
      <div className="mt-0 grid grid-cols-3 gap-4">{children}</div>
    </Container>
  );
}
