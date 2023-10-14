import { useLoaderData } from "react-router-dom";
import Button from "../components/Common/Button/Button";
import Container from "../components/Common/Container";
import { getOrder } from "../services/apiRestaurant";

export default function FoodPage() {
  const { id, image, description, name, price, tag } = useLoaderData();

  return (
    <Container className="mb-20 flex h-[25rem] flex-wrap items-center lg:flex-nowrap lg:gap-10">
      <div className="mx-auto flex w-[55rem] gap-10">
        <div className="h-50 w-50 overflow-hidden rounded-full">
          <img
            src={image ? image : ""}
            alt="Benefits"
            className="h-[25rem] w-full object-cover"
            placeholder="blur"
            // blurDataURL={data.image.src}
          />
        </div>
        <div className="flex w-[25rem] flex-row">
          <div>
            <div className="flex h-3/5 flex-col ">
              <p className="mt-1 text-gray-500 dark:text-gray-400">P{price}</p>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {name}
              </h4>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="mt-auto  grid w-full justify-items-end">
              <span>
                <Button className="ml-5" type="primary">
                  Add to cart
                </Button>
                <Button className="ml-5" type="primary">
                  Checkout
                </Button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`flex w-full flex-wrap items-center lg:w-1/2 lg:justify-end`}
      >
        <div>
          <div className="mt-4 flex w-full flex-col">
            <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
              {name}
            </h3>

            <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
              {price}
            </p>
          </div>

          <div className="mt-5 w-full"></div>
        </div>
      </div> */}
      {/* <div className="mt-4 w-full ">
        <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
        </h3>
      </div> */}
    </Container>
  );
}

export async function loader({ params }) {
  // useParams cannot be used here since it only works for components and not on regular function
  const order = await getOrder(params.orderId);
  return order;
}
