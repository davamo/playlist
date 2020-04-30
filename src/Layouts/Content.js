import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Playlist from '../Views/Playlist/Playlist';
import DetailPlaylist from '../Views/DetailPlaylist/DetailPlaylist';
import Contador from '../Views/Contador/Contador';

const Content = () => {
  return (
    <>
      <Switch>
       <Route exact path="/contenidos/" component={Playlist} />
       <Route exact path="/contenidos/detalle/:id" component={DetailPlaylist} />
       <Route exact path="/contador" component={Contador} />
      </Switch>
    </>
  );

}

export default Content;