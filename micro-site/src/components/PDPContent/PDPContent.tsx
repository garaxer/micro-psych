import { getServiceById, Service, currency } from "remote/services";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const PDPContent = () => {
  const { id } = useParams<{ id?: string }>();
  const [service, setService] = useState<Service>(null);

  useEffect(() => {
    if (id) {
      getServiceById(id).then(setService);
    } else {
      setService(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  if (!service) return <h3>404 Service not found</h3>;
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={service.image} alt={service.name} />
      </div>
      <div>
        <div className="flex">
          <h1 className="font-bold text-3xl flex-grow">{service.name}</h1>
          <div className="font-bold text-3xl flex-end">
            {currency.format(service.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{service.description}</div>
        <div className="mt-10">{service.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
