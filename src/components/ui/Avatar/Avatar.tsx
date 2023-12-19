import React from 'react';
import { Avatar as AvatarMUI, AvatarProps } from '@mui/material';
import PhotoCover from '../../../assets/photo-cover.svg?react';

function Avatar({ alt, src }: AvatarProps) {
  return (
    <AvatarMUI alt={alt} src={src} style={{ width: '70px', height: '70px' }}>
      <PhotoCover />
    </AvatarMUI>
  );
}

export default Avatar;
