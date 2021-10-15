import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

export interface IImageModalProps {
  title: string;
  imageSrc: string;
  isOpen: boolean;
  setIsOpen: (openStatus: boolean) => void;
}

const ImageModal = ({
  title,
  imageSrc,
  isOpen,
  setIsOpen,
}: IImageModalProps): ReactElement => {
  return (
    <Modal isOpen={isOpen} toggle={() => setIsOpen(false)}>
      <ModalHeader>
        <Row className="d-flex align-items-center justify-content-between px-3 pb-2">
          <h2 className="monterey-text mb-0">{imageSrc}</h2>
          <Button outline color="default" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Row>
        <img
          src={`marty-emmet/${imageSrc}`}
          alt={imageSrc}
          width="100%"
          height="auto"
        />
      </ModalHeader>
      <ModalBody className="py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <Row className="w-100">
          <Col
            sm={12}
            className="px-0 d-flex align-items-center justify-content-center"
          >
            <Button outline color="default" className="w-100">
              Buy Now <FontAwesomeIcon icon={faEthereum} /> 1
            </Button>
          </Col>
        </Row>
      </ModalFooter>
    </Modal>
  );
};

export default ImageModal;
