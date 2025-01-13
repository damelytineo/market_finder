import React, { useEffect, useState, useRef } from "react";
import { Map, AdvancedMarker} from '@vis.gl/react-google-maps';

const GoogleMap = React.memo((props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const containerStyle = {
    width: "300px",
    height: "300px",
  };

  const center = {
    lat: props.latitude,
    lng: props.longitude,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ height: "300px", width: "300px" }}>
      {isVisible && (
        <Map style={containerStyle} defaultCenter={center} defaultZoom={15} mapId={`${props.marketId}`}>
          <AdvancedMarker position={center}/>
        </Map>
      )}
    </div>
  );
});

export default GoogleMap;
