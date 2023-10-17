import Container from "../Common/Container";

export default function PizzaList({ children }) {
  return (
    <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-0">
      {children}
    </Container>
  );
}
