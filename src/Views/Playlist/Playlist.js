import React from 'react';
import { useFetch } from '../../Services/Services';
import './Playlist.css';
import  Slider from '../../Components/Slider';

const Playlist = () => {
    const urlTemp = 'https://mychannel.nunchee.tv/api/generic/playlists/details/5b845b8346cc29000e4f186a?itemsPerPage=10';
    const [data, loading] = useFetch(`${urlTemp}`);
    return (
      <>
        {loading ? <div>Loading...</div> :
          <Slider data={data}/>
        }
      </>
    );
}

export default Playlist;
