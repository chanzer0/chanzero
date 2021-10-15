import Header from "components/header/header";
import React, { ReactElement } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./about.css";

const About = (): ReactElement => {
  return (
    <Container fluid className="px-0">
      <Header />
      <Col sm={12}>
        <Row className="d-flex align-items-start justify-content-center">
          <Col md={12} lg={3}>
            <Card className="aboutCard">
              <div className="imageContainer">
                <CardImg className="header" top src="cornered-stairs.svg" />
                <img className="doubleBorder" src="toad.png" alt="toad" />
              </div>
              <CardBody className="aboutContainer">
                <h2 className="text-muted">About</h2>
                <CardText>
                  My name is Sean, I'm 23 and I'm a full stack Web3 developer.
                  I've been in the crypto space since 2018 and the specific
                  subset of NFTs since January of 2021. I've worked and
                  developed for projects in the NFT space such as{" "}
                  <a
                    href="https://luckytrader.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Lucky Trader
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://opensea.io/collection/cryptoadz-by-gremplin"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Cryptoadz By GREMPLIN
                  </a>
                  .
                </CardText>
                <h2 className="text-muted">Hobbies</h2>
                <CardText>
                  In my (limited) spare time, I enjoy playing games like chess
                  and geoguessr, engaging in amateur landscape and street
                  photography, and creating new tools and projects I'm excited
                  about providing to users in the Web3.0 ecosystem.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} lg={9}>
            <Card className="aboutCard">
              <CardBody>
                <h3>What is Blockchain?</h3>
                <CardText>
                  "Blockchain" is a term used to describe a public,
                  permissionless ledger that anyone can interact with. Much like
                  the term implies, this information is stored, updated and
                  verified by thousands of decentralized nodes across the world
                  in a series (chain) of blocks. The first block is created at
                  the inception of the protocol, and each subsequent block in
                  the chain stores new information about the state of the public
                  ledger. For example, if I wanted to send you money on the
                  blockchain, I would create a transaction to be submitted into
                  the next block that says I want to pay you $100. The
                  transaction would be accepted into the block, verified and
                  then permanently stored in the public ledger. Once verified
                  and accepted, our balances would be updated to reflect that
                  transaction. The permissionless and decentralized nature of a
                  blockchain makes it incredibly secure and immune from any
                  centralized influence, such as censorship and corruption. To
                  learn more in-depth informaton about blockchain technology,
                  you can{" "}
                  <a
                    href="https://time.com/nextadvisor/investing/cryptocurrency/what-is-blockchain/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    read this article
                  </a>{" "}
                  that goes into more depth than I do here. Blockchain
                  technology provides a backbone for the cryptocurrency and NFT
                  space.
                </CardText>
                <h3>What are NFTs?</h3>
                <CardText>
                  Money and strict accounting information isn't the only thing
                  that can be stored on a blockchain! In fact, you can store
                  just about anything you want given enough space and money.
                  Images, video, audio, and much more can all be stored on the
                  blockchain. "Why would anybody do this?" you might ask. The
                  premissionless nature of the blockchain allows for data and
                  information to be accessed that just isn't available in the
                  real-world equivalent. For example, if you go to a museum, are
                  you able to see who actually owns the piece hanging on the
                  wall? How about how much they paid for it? Or who the previous
                  owners were? What about who created the art? All of these
                  questions are hard to find and verify in the real world, but
                  are easily-found and verifiable on the blockchain. This makes
                  artwork and collectibles a prime target to store on the
                  blockchain, as anyone can tell who created the art (no
                  forgeries or frauds), every past owner (and how much they paid
                  for it), and who the current owner of the item is. Don't just
                  take my word for it - you can read{" "}
                  <a
                    href="https://www.sothebys.com/en/articles/nfts-redefining-digital-ownership-and-scarcity"
                    rel="noreferrer"
                    target="_blank"
                  >
                    this article
                  </a>{" "}
                  from Sotheby's, a traditional art auction house that has
                  ventured into the world of NFTs, along with other major houses
                  such as Christies and Phillips. Even major cryptocurrency
                  exchanges like FTX and Coinbase are launching support for
                  NFTs.
                </CardText>
                <h3>What's on your Website?</h3>
                <CardText>
                  As a hobbyist photographer and Web3.0 enthusiast, it only
                  seemed right that I combine two of my loves in a symbiotic
                  manner. On my site, you will find "Collections", which are
                  categorized photographs I have taken, edited and minted on the
                  Ethereum blockchain. Their creation, history and current
                  ownership stored permanently out in the open, to exist far and
                  beyond my lifetime. Newly-minted photographs will be availble
                  to purchase, and owners of my photographs will be able to list
                  them here or any marketplace that supports the ERC-721
                  protocol.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default About;
