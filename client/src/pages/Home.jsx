import React, { useEffect, useState } from "react";
import { Carousel, Col, Container, Image , Row} from "react-bootstrap";

function Home() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?&limit=5")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
        <Carousel>
          {images?.map((image) => (
            <Carousel.Item key={image.id}>
              <Image
                src={image.download_url}
                fluid
                style={{ maxHeight: "100vh", width: "100vw" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Container className="mt-5 mb-5 py-5">
          <Row className="mt-5 gap-5">
            <Col>
              <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia, modi sint delectus facilis placeat neque totam est nostrum, iure assumenda optio vel aliquam doloribus accusamus deleniti sequi temporibus eaque eius possimus. Deserunt eius hic quam numquam doloremque dignissimos quo reprehenderit veritatis necessitatibus? Odit aut qui est ipsam exercitationem molestiae cum nulla ullam quos necessitatibus. Numquam maiores inventore maxime provident rem qui consequatur autem officiis veniam ad excepturi iusto, voluptate ipsum voluptas suscipit sint dolor consectetur, recusandae reiciendis perspiciatis assumenda? Ea quam amet quaerat incidunt doloribus, numquam sapiente obcaecati cupiditate, earum consequuntur iure facilis dignissimos veritatis repellat optio magni beatae at officiis molestiae quod! Quod, consectetur sit labore ratione atque ipsa. Similique, quos cumque, voluptates officiis saepe deserunt possimus voluptatem excepturi dignissimos sunt est, fuga ab harum! Molestiae similique tempora, rerum fugiat eum a vel, quos est architecto expedita corporis provident perferendis doloremque, placeat veritatis. Repudiandae temporibus repellendus sint et.
              </p>
            </Col>
            <Col>
            <Image alt="image" src="https://picsum.photos/400" roundedCircle/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Home;
