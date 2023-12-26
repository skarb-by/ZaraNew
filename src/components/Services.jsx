import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "../styles/Services.css";

const Services = () => {
  return (
    <section className="Services">
      <div className="container">
        <div className="grid grid-three-column">
          <div className="services-1">
            <div>
              <TbTruckDelivery className="icon" />
              <h3>Супер быстрая и бесплатная доставка</h3>
            </div>
          </div>
          <div className="services-2">
            <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Бесконтактная доставка</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Гарантированный возврат денег</h3>
              </div>
            </div>
          </div>
          <div className="services-3">
            <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Сверхбезопасная платежная система</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
