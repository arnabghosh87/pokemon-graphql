import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($first:Int!) {
    pokemons(first:$first){
      id
      name
      image
      resistant
      weaknesses
      attacks{
        fast{
          name
          damage
        }
        special{
          name
          damage
        }
      }
    }
  }
`
