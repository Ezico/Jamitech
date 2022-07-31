import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import Room from "./Products";
import Loading from "./Loading";
export default class Isinnverters extends Component {
  static contextType = RoomContext;

  render() {
    let { loading, invertersOnly: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Shop for Solar Panels" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
