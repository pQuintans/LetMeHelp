import React, { useEffect, useState } from 'react';

import './styles.scss';

import shortLogo from '../../assets/ShortLogo.svg'
import defaultProfilePicture from '../../assets/foto-perfil-teste.jpg'
import stars from '../../assets/DefaultStars.svg'
import { SideBar } from '../../components/Sidebar';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

type ErrorType = {
  code: Number,
  message: String
} 


const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {
      lat: -13.6628064, 
      lng: -50.6464904
    }
  });

  const onSuccess = (location: GeolocationPosition) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude, 
        lng: location.coords.longitude
      }
    })
  }

  const onError = (error: ErrorType) => {
    setLocation(state => ({
      ...state,
      loaded: true,
      error,
    }))
  }

  useEffect(() => {
    if( !("geolocation" in navigator) ) {
      onError({
        code: 0,
        message: "Geolocation not supported"
      });
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, [])

  return location;
}

function getWindowWidth() {
  const { innerWidth: width } = window;
  return width
}

export function Map() {
  const [width, setWidth] = useState(
    getWindowWidth()
  );
  const location = useGeoLocation();

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-page">
      {width > 700 ? 
        <nav className="navbar">
          <div className="first-segment">
            <img src={shortLogo} alt="LetMeHelp" />
            <a>Sobre nós</a>
            <a>Suporte</a>
          </div>
          <div className="last-segment">
            <img className="profile-picture" src={defaultProfilePicture} alt="Foto de Perfil / Login" />
          </div>
        </nav>
        :
        <nav className="navbar-burger">
          <div className="first-segment">
            <img src={shortLogo} alt="LetMeHelp" />
          </div>
          <div className="last-segment">
            <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"}>
              <div className="profile" style={{display: "flex"}}> 
                <img className="profile-picture" src={defaultProfilePicture} alt="Foto de Perfil / Login" />
                <a>Meu Perfil</a>
              </div>
              <a className="bm-item menu-item" href="/">Sobre nós</a>
              <a className="bm-item menu-item" href="/about">Suporte</a>
            </SideBar>
          </div>
        </nav>
      }
      
      <div className="content">
        <MapContainer center={(location.loaded) ? [location.coordinates.lng, location.coordinates.lat] : [-22.8899125, -47.0865109]} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-22.8899125, -47.0865109]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

        <div className="cards">
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <img src={defaultProfilePicture} alt="" />
            </div>
            <div className="card-content">
              <p className="name">Fernando Vasconcelos</p>
              <div className="inner">
                <p>Morton Avenue, n 97</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="card-button">
              <a>
                Entrar em Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}