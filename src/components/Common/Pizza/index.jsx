import Container from "../Container";

export default function Pizza({ imgPos, children }) {
  return (
    <Container className="mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10">
      <div
        className={`flex w-full items-center justify-center lg:w-1/2 ${
          imgPos === "right" ? "lg:order-1" : ""
        }`}
      >
        <div>
          {/* <Image
            src={image}
            width="521"
            height="auto"
            alt="Benefits"
            className={"object-cover"}
            placeholder="blur"
            blurDataURL={image.src}
          /> */}
        </div>
        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div className="mt-5 w-full">
            <div className="mt-8 flex items-start space-x-3">
              <div className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 ">
                {/* {React.cloneElement(props.icon, {
                  className: "w-7 h-7 text-indigo-50",
                })} */}
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  <span>Chicken Burger</span>
                  <span className="text-primary">$115</span>
                </h4>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {/* {children} */}
                  Ipsum ipsum clita erat amet dolor justo diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
