import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg,
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/products" className="btn-primary">
            back to Products
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [main, ...defaultImages] = images;

    const config = {
      public_key: "FLWPUBK_TEST-9f0909dedd120b900870a58568c9da78-X",
      tx_ref: Date.now(),
      amount: price,
      currency: "NGN",
      payment_options: "card,mobilemoney,ussd",
      customer: {
        email: "user@gmail.com",
        phonenumber: "07064586146",
        name: "joel ugwumadu",
      },
      customizations: {
        title: "JamiTech Energy Ltd",
        description: `Payment for items ${name} in cart`,
        logo: "https://jamitechenergy.com/wp-content/uploads/2021/03/cropped-ICON-Copy.png",
      },
    };
    const fwConfig = {
      ...config,
      text: "Order Now",
      callback: (response) => {
        console.log(response);
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    };
    return (
      <>
        {/* <StyledHero img={images[2] || this.state.defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/products" className="btn-primary">
              back to Products
            </Link>
          </Banner>
        </StyledHero> */}

        <section className="single-room">
          {/* <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div> */}
          <div className="container">
            <div className="row">
              <div className="col-7">
                <img src={images[0]} />
              </div>
              <div className="col-5">
                <article className="desc">
                  <h3 className="pro-name">{name}</h3>
                  <h6 className="pro-price">price : ₦ {price}</h6>
                  <h6 className="pro-size">size : {size} SQFT</h6>
                  <h6 className="pro-capacity">max capacity :{capacity} KVA</h6>
                  <h6>{pets && "Quote allowed"}</h6>
                  <h6>{breakfast && "on sales"}</h6>
                  <div className="action">
                    {/* <Link className="btn-secondary" to="/quote">
                      Get a Quote
                    </Link> */}
                    <FlutterWaveButton className="btn-primary" {...fwConfig} />
                  </div>
                </article>
                <article className="info">
                  <h3>Description</h3>
                  <p>{description}</p>
                </article>
              </div>
            </div>

            <section className="room-extras">
              <h3>EXTRAS </h3>
              <ul className="extras">
                {extras.map((item, index) => (
                  <li key={index}>- {item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </>
    );
  }
}
