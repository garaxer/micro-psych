import { useEffect, useState } from "react";
import { currency, getServices, Service } from "../services";

const HomeContent = () => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5 ">
      {services.map((service) => (
        <div key={service.id} className="bg-white p-1">
          <img src={service.image} alt={service.name} />

          <hr />
          <div className="flex p-t-1">
            <div className="flex-grow font-bold">
              <a>{service.name}</a>
            </div>
            <div className="flex-end">{currency.format(service.price)}</div>
          </div>
          <div className="text-sm mt-4">{service.description}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
