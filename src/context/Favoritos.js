
import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext()

FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider ({children}){
    const [favorito, setFavorito] = useState([])

    return (<FavoritosContext.Provider value={{favorito, setFavorito}}>
        {children}
    </FavoritosContext.Provider>);
}

export function useFavoritosContext (){
    const {favorito, setFavorito} = useContext(FavoritosContext)

    function agregarFavorito (nuevoFavorito){
        const favoritoRepetido = favorito.some((item) => item.id === nuevoFavorito.id); //usamos este método para verificar si dentro del recorrido del array se encentra un id igual al que se verifica y some retorna un booleano si alk menos uno de los elementos cumple

        let nuevaLista = [...favorito]
        if(!favoritoRepetido){ //Si no hay un favorito repetido
            nuevaLista.push(nuevoFavorito)//Entonces a la nuevaLista se le agrega el nuevoFavorito
            return setFavorito(nuevaLista); // Se actualiza el estado de favorito
        }

        nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id) //Quiere decir si es igual, lo va a quitar
        return setFavorito(nuevaLista);
    }
    return {favorito, agregarFavorito};

}