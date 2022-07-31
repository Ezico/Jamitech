import React, { Component } from "react";
import Title from "./Title";
import { RoomContext } from "../context";
import GalleryItems from "../components/GalleryItems";
import Loading from "./Loading";

export default class Galleries extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, galleryItems: rooms } = this.context;

    rooms = rooms.map((room) => {
      return <GalleryItems key={room.id} room={room} />;
    });
    console.log(rooms);
    return (
      <section className="featured-rooms gallery">
        <Title title="Our Gallery" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
