import Header from "components/header/header";
import React, { ReactElement, useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardFooter,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import "./collection.css";
import Masonry from "react-masonry-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import ImageModal from "components/image-modal/image-modal";

const Collection = (): ReactElement => {
  const { collectionName } = useParams<{ collectionName: string }>();
  const [collectionImages, setCollectionImages] = useState<string[]>([]);
  const [selectedImg, setSelectedImg] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const breakpoints = {
    2560: 5,
    default: 4,
    992: 3,
    768: 2,
    576: 1,
  };

  useEffect(() => {
    if (collectionName != null) {
      setCollectionImages([
        "DSC00459.jpg",
        "DSC00465.jpg",
        "DSC00466.jpg",
        "DSC00472.jpg",
        "DSC00476.jpg",
        "DSC00479.jpg",
        "DSC00480.jpg",
        "DSC00482.jpg",
        "DSC00484.jpg",
        "DSC00485.jpg",
        "DSC00486.jpg",
        "DSC00488.jpg",
        "DSC00494.jpg",
        "DSC00495.jpg",
        "DSC00500.jpg",
        "DSC00501-2.jpg",
        "DSC00501-3.jpg",
        "DSC00501.jpg",
        "DSC00506.jpg",
        "DSC00507.jpg",
        "DSC00511-2.jpg",
        "DSC00511.jpg",
        "DSC00514.jpg",
        "DSC00515.jpg",
        "DSC00517.jpg",
        "DSC00518-2.jpg",
        "DSC00518.jpg",
        "DSC00523.jpg",
        "DSC00525.jpg",
        "DSC00536.jpg",
        "DSC00545.jpg",
        "DSC00549.jpg",
        "DSC00551-2.jpg",
        "DSC00551.jpg",
        "DSC00555.jpg",
        "DSC00570.jpg",
        "DSC00573.jpg",
        "DSC00581-2.jpg",
        "DSC00581.jpg",
        "DSC00588-2.jpg",
        "DSC00588.jpg",
        "DSC00609-2.jpg",
        "DSC00609.jpg",
        "DSC00622-2.jpg",
        "DSC00622.jpg",
        "DSC00626-2.jpg",
        "DSC00626.jpg",
        "DSC00627.jpg",
        "DSC00639.jpg",
        "DSC00646.jpg",
      ]);
    }
  }, [collectionName]);

  const openModal = (imageSrc: string) => {
    setSelectedImg(imageSrc);
    setModalOpen(true);
  };

  return (
    <Container fluid className="px-0">
      <Header />
      <Col sm={12}>
        <Row className="d-flex align-items-center justify-content-center">
          <h1 className="collectionName monterey-text">
            {collectionName.replaceAll("-", " ")}
          </h1>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {collectionImages.map((imageSrc: string) => {
              return (
                <Card key={imageSrc}>
                  <div role="button" onClick={() => openModal(imageSrc)}>
                    <CardImg top src={`marty-emmet/${imageSrc}`} />
                  </div>
                  <CardFooter className="px-2 py-2">
                    <Row>
                      <Col
                        sm={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <h4 className="monterey-text">{imageSrc}</h4>
                      </Col>
                      <Col
                        sm={12}
                        className="d-flex align-items-center justify-content-center"
                      >
                        <Button outline color="default" className="w-100">
                          Buy Now <FontAwesomeIcon icon={faEthereum} /> 1
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              );
            })}
          </Masonry>
        </Row>
        {modalOpen && (
          <ImageModal
            title={selectedImg}
            imageSrc={selectedImg}
            isOpen={modalOpen}
            setIsOpen={(status: boolean) => setModalOpen(status)}
          />
        )}
      </Col>
    </Container>
  );
};

export default Collection;
