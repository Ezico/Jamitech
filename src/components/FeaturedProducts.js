import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Products";
import Loading from "./Loading";
export default class FeaturedProducts extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured Products" />
        <div className="roomslist-center">{loading ? <Loading /> : rooms}</div>
      </section>
    );
  }
}
