import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from "../graphql/getPokemons";
import { Pokemons } from "../components/Pokemons";
import Carousel from 'react-elastic-carousel';
import CircularProgress from '@mui/material/CircularProgress';

export const PokemonContainer = () => {
    const breakPoints = [ 
        {width:1,itemsToShow:1},
        {width:500,itemsToShow:2},
        {width:768,itemsToShow:3},
        {width:1400,itemsToShow:4}
      ];

    const {data : {pokemons = []} = {} } = useQuery(GET_POKEMONS,{variables:{first:150}});

    return (
        <div className="containerDiv">
            {Object.keys(pokemons).length === 0 ? 
        (<div style={{position: 'relative'}}>
        <CircularProgress  style={{marginLeft: '50%'}}/>
      </div>)
        :(
      <>
            <div>
             <Carousel breakPoints={breakPoints} className="carousel">
            {pokemons && pokemons.map((pokemon, index) => <Pokemons index= {index} key={index} data ={pokemon}/>)}
            </Carousel>
            </div>
            </>
            )}
        </div>
    )
}
