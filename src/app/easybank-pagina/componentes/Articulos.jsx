import Image from "next/image";
import currency from "../image/image-currency.jpg";
import restaurant from "../image/image-restaurant.jpg";
import plane from "../image/image-plane.jpg";

export default function Articulos() {
  return (
    <>
      <section className="bg-white max-w-5xl mx-auto p-6">
        <h2 className="md:text-2xl text-3xl text-gray-600 text-center md:text-start mb-6">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3">
          <div className="max-w-xs mx-auto mb-6">
            <Image
              src={currency}
              alt=""
              className="rounded-t-xl"
            />
            <div className="">
              <p className="text-sm font-medium ">By Claire Robinson</p>
              <h3 className="text-xl md:text-md text-gray-800">
                {" "}
                Receive money in any currency with no fees
              </h3>
              <p className="text-lg md:text-sm line-clamp-3  text-gray-600 font-medium">
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto mb-6">
            <Image
              src={restaurant}
              alt=""
              className="rounded-t-xl"
            />
            <div className="">
              <p className="text-sm font-medium ">By Wilson Hutton</p>
              <h3 className="text-xl md:text-md text-gray-800">
                {" "}
                Treat yourself without worrying about money
              </h3>
              <p className="text-lg md:text-sm line-clamp-3  text-gray-600 font-medium">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto mb-6">
            <Image
              src={plane}
              alt=""
              className="rounded-t-xl"
            />
            <div className="">
              <p className="text-sm font-medium"> By Wilson Hutton</p>
              <h3 className="text-xl md:text-md text-gray-800">
                {" "}
                Take your Easybank card wherever you go
              </h3>
              <p className="text-lg md:text-sm line-clamp-3  text-gray-600 font-medium">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="max-w-xs mx-auto mb-6">
            <img
              src={confetti}
              alt=""
              className="rounded-t-xl"
            />
            <div className="">
              <p className="text-sm font-medium">By Claire Robinson</p>
              <h3 className="text-xl md:text-md text-gray-800">
                {" "}
                Our invite-only Beta accounts are now live!
              </h3>
              <p className=" text-lg md:text-sm line-clamp-3  text-gray-600 font-medium">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
