import Container from "../Common/Container";
import { Category } from "../Common/Category";

export default function FoodCategory({ align, categories }) {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {categories && (
        <ul className="inline-flex justify-center border-b-2">
          {categories.map((title) => (
            <Category key={title} title={title}></Category>
          ))}
        </ul>
      )}
    </Container>
  );
}
