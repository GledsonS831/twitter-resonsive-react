import React from 'react';

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
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Gledson santos</h1>
        <h2>@gledson.js</h2>

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
            seguindo <strong>100</strong>
          </span>

          <span>
            <strong>100 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
