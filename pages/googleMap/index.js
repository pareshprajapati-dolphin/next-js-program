import React from "react";
import Map from "google-map-react";
import Layout from "../../component/Layout";

const GoogleMap = () => {
  return (
    <Layout>
      <div className="row w-100 mt-2">
        <div
          className="col text-center"
          style={{ width: "100%", height: "500px" }}
        >
          <Map
            bootstrapURLKeys={{
              key: "AIzaSyBt0X3AaBazmYaBxaYKuS0S_waJLe4hYls",
            }}
            defaultZoom={5}
            defaultCenter={{
              lat: 21.7679,
              lng: 78.8718,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

export default GoogleMap;
