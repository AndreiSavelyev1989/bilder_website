import { forwardRef, memo } from "react";
import { Service } from "./Service/Service";
import { services } from "../../assets/mockData/index";
import { Container, RefBlock, Title, Wrapper } from "./ServicesStyles";

const Services = memo(
  forwardRef((props, ref) => {
    return (
      <Container>
        <RefBlock ref={ref} />
        <Title>Наши услуги</Title>
        <Wrapper>
          {services.map((el) => (
            <Service
              key={el.id}
              title={el.title}
              services={el.services}
              photoSrc={el.src}
            />
          ))}
        </Wrapper>
      </Container>
    );
  })
);

export default Services;