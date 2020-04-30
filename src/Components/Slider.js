import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import {
  SliderItem,
  SliderContainer,
  SliderWrapper,
  Navigation,
  NavigationItem,
  ControlLeft,
  ControlRight
} from "./Styles";

import './Slider.css';

const Slider = (props) => {
  const item = props.data.data.items;

  const width = useWindowWidth();
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    items: item
  });

  return (
    <div>
      <SliderContainer className={"slider-instance"} height={"500px"}>
        <SliderWrapper
          width={width * state.items.length}
          style={{
            transform: `translateX(${-(state.currentIndex * width)}px)`,
            transition: "transform ease-out 0.30s",
            width: width * state.items.length + "px"
          }}
        >
          {state.items.map((i, index) => {
            return (
              <Slide
                key={i._id}
                last={index === state.items.length - 1}
                index={index}
                item={i}
                dispatch={dispatch}
                snap={state.snap}
                width={width}
              />
            );
          })}
        </SliderWrapper>

        <Navigation>
          {state.items.map((i, index) => {
            return (
              <NavigationItem
                active={index === state.currentIndex}
                onClick={() => dispatch({ type: "GOTO", index })}
                key={"nav" + i._id}
              >
                &nbsp;
              </NavigationItem>
            );
          })}
        </Navigation>
        <div>
          {state.currentIndex > 0 ? (
            <ControlLeft onClick={() => dispatch({ type: "PREV" })}>
              &#x276e;
            </ControlLeft>
          ) : (
              ""
            )}

          {state.currentIndex < state.items.length - 1 ? (
            <ControlRight onClick={() => dispatch({ type: "NEXT" })}>
              &#x276f;
            </ControlRight>
          ) : (
              ""
            )}
        </div>
      </SliderContainer>
    </div>
  );
};

const useWindowWidth =()=> {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

const reducer = (state, action) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        currentIndex: state.currentIndex + (1 % state.items.length)
      };
    case "PREV":
      return {
        ...state,
        currentIndex: state.currentIndex - (1 % state.items.length)
      };
    case "GOTO":
      return {
        ...state,
        currentIndex: action.index
      };
    case "RESET":
      return { currentIndex: 0, currentPosition: 0 };

    default:
      return state;
  }
}

const loadImage = (arrayImages, width) => {
  
  const urlTemp = 'https://mychannel.nunchee.tv/api/assets/images/view';

  if (width >= 320){
      let idImage = arrayImages.filter(dataImage => dataImage.type === 'backdrop');
      return `${urlTemp}/${idImage[0]._id}?type=backdrop`;

  }
}


const Slide = ({ item, width }) => {
  return (
    <SliderItem width={width}>
      <div className="contentDetailsComponent">
        <div className="contentDetailsComponentBody">
          <div className="contentImageContainer">
            <div className='contentImage' style={{ backgroundImage: `url(${loadImage(item.images, width)})` }} >
            </div>
            <div className='contentContainer'>
              <div className='contentContainerItems'>
                <h2 className="titleOfMovie">
                  <font style={{ verticalAlign: 'inherit' }}>
                    <font style={{ verticalAlign: 'inherit' }}>{item.title.original}</font>
                  </font>
                </h2>
                <div className='details d-flex align-items-center'>
                  
                 
                  <span className="detailsElementSeparator"></span>

                  <div className="abstract">
                    <p>
                      <font style={{ verticalAlign: 'inherit' }}>
                        <font style={{ verticalAlign: 'inherit' }}>{item.description.plain.original} </font>
                      </font>
                    </p>
                  </div>

                  <div className="actions">
                    <div className="buttonComponent play row justify-content-center align-items-center cursorPointer blue">
                      <button>
                        <Link to={`/contenidos/detalle/${item._id}`} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"><g fill="none" fill-rule="evenodd" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><circle cx="12.5" cy="12.5" r="12.5" stroke-width="2"></circle><path fill="#FFF" d="M10.31 8l7.054 4.5L10.31 17z"></path></g></svg>
                          <span><font style={{ verticalAlign: 'inherit' }}>
                            <font style={{ verticalAlign: 'inherit' }}></font></font></span>
                        </Link>
                      </button>
                    </div>

                    <div className="watchListButton">
                      <div className="buttonComponent row justify-content-center align-items-center cursorPointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" viewBox="0 0 26 23" ><path fill="#FFF" fill-rule="evenodd" stroke="#FFF" d="M22.207 11.522l-8.652 9.134a.216.216 0 0 1-.147.067.22.22 0 0 1-.151-.058L4.03 12.06a5.433 5.433 0 0 1-1.742-3.826 5.405 5.405 0 0 1 1.506-3.922 5.524 5.524 0 0 1 3.86-1.726 5.511 5.511 0 0 1 3.96 1.491c.282.264.536.552.757.871a.647.647 0 0 0 1.082-.032 5.524 5.524 0 0 1 4.563-2.64 5.503 5.503 0 0 1 3.96 1.491 5.431 5.431 0 0 1 1.74 3.826 5.426 5.426 0 0 1-1.51 3.928m.648-8.684a6.817 6.817 0 0 0-4.882-1.835 6.78 6.78 0 0 0-4.757 2.124c-.12.125-.24.258-.349.394a6.17 6.17 0 0 0-.372-.372 6.815 6.815 0 0 0-4.88-1.836 6.782 6.782 0 0 0-4.759 2.124 6.692 6.692 0 0 0-1.852 4.837 6.672 6.672 0 0 0 2.144 4.717l9.227 8.606c.292.273.671.414 1.073.402a1.492 1.492 0 0 0 1.046-.466l8.652-9.141a6.684 6.684 0 0 0 1.852-4.836 6.672 6.672 0 0 0-2.143-4.718"></path></svg></div></div>
                    <div className="buttonComponent play row justify-content-center align-items-center cursorPointer gray" go-extradata="{Referring Domain} | Películas | Once Upon a Time in... Hollywood | Play"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25"><g fill="#FFF" fill-rule="evenodd" stroke="#FFF" stroke-width=".9"><path d="M7.222 7.44h11.556v-.92H7.222zM4.556 18.48h15.11v-.92H4.557z"></path><path d="M1.8 6.15V2.233c0-.228.18-.413.402-.413H6.02c.222 0 .402.185.402.413V6.15c0 .228-.18.413-.402.413H2.2A.408.408 0 0 1 1.8 6.15zm4.22 5.904H2.203a.408.408 0 0 1-.403-.413V7.796c0-.228.18-.413.403-.413H6.02c.222 0 .402.185.402.413v3.845c0 .228-.18.413-.402.413zm0 5.563H2.203a.408.408 0 0 1-.403-.413V13.36c0-.228.18-.413.403-.413H6.02c.222 0 .402.185.402.413v3.845c0 .228-.18.413-.402.413zm0 5.563H2.203a.408.408 0 0 1-.403-.413V18.85c0-.228.18-.413.403-.413H6.02c.222 0 .402.185.402.413v3.917c0 .228-.18.413-.402.413zM1.403 1A.408.408 0 0 0 1 1.413v22.174c0 .228.18.413.402.413H6.82a.408.408 0 0 0 .402-.413V1.413A.408.408 0 0 0 6.82 1H1.402zM19.577 6.15V2.233c0-.228.18-.413.402-.413h3.82c.222 0 .402.185.402.413V6.15c0 .228-.18.413-.403.413H19.98a.408.408 0 0 1-.402-.413zm4.221 5.904H19.98a.408.408 0 0 1-.402-.413V7.796c0-.228.18-.413.402-.413h3.82c.222 0 .402.185.402.413v3.845c0 .228-.18.413-.403.413zm0 5.563H19.98a.408.408 0 0 1-.402-.413V13.36c0-.228.18-.413.402-.413h3.82c.222 0 .402.185.402.413v3.845c0 .228-.18.413-.403.413zm0 5.563H19.98a.408.408 0 0 1-.402-.413V18.85c0-.228.18-.413.402-.413h3.82c.222 0 .402.185.402.413v3.917c0 .228-.18.413-.403.413zM19.18 1a.408.408 0 0 0-.402.413v22.174c0 .228.18.413.402.413h5.418a.408.408 0 0 0 .402-.413V1.413A.408.408 0 0 0 24.598 1H19.18z"></path></g></svg></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SliderItem>


  );
};

export default Slider;