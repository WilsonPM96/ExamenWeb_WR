import {Injectable} from '@nestjs/common';
import {EquiposFutbol} from "../EquipoFutbol/equipofutbol.service";

@Injectable()
export class JugadorService{
    jugadores : Jugadores [] = [];

    crear_jugador(jugador:Jugadores): Jugadores[]{
        this.jugadores.push(jugador);
        return this.jugadores;
    }

    mostrar_jugador():Jugadores []{
        return this.jugadores;
    }

    actualizar_jugador(jugador: Jugadores): Jugadores[]{

        const indice = this.jugadores
            .findIndex(
                (jugadorObjeto) => jugadorObjeto === jugador);

        this.jugadores.slice(indice, 1);
        this.jugadores.push(jugador)
        return this.jugadores;
    }
}
export interface Jugadores {
    numeroCamiseta:number,
    nombreCamiseta:string,
    nombreCompletoJugador:string,
    poderEspecialDos:string,
    fechaIngresoEquipo:Date,
    goles:number,
    equipoFutbolId:number,
}