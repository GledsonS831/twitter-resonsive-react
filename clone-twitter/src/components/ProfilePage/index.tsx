import React from 'react';

import Feed from '../Feed';
import Perfil from '../../assets/perfil.jpg';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src={Perfil} />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Gledson.js</h1>
        <h2>@Gledsonssj</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />  
            Montadas, PB
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 4 de março de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>10000</strong>
          </span>

          <span>
            <strong>10000 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
