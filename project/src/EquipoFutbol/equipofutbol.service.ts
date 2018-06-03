import {Injectable} from '@nestjs/common';
import {createWhile} from "typescript";

@Injectable()
export class EquipofutbolService {
    equipos_futbol: EquiposFutbol[] = [];

    crearEquiposFut(equipos_futbol: EquiposFutbol): EquiposFutbol[] {
        this.equipos_futbol.push(equipos_futbol);
        return this.equipos_futbol;
    }

    mostrarEquiposFut(): EquiposFutbol[] {
        return this.equipos_futbol;
    }

    actualizarEquiposFut(EquiposFut: EquiposFutbol): EquiposFutbol[]{

        const indice = this.equipos_futbol
            .findIndex(
                (equipoObjeto) => equipoObjeto === EquiposFut);

        this.equipos_futbol.slice(indice, 1);
        this.equipos_futbol.push(EquiposFut)
        return this.equipos_futbol;
    }
}
export interface EquiposFutbol {
    equipoFutbolId: number,
    nombre: string,
    liga: number,
    fechaCreacion: Date,
    numeroCopasInternacionales: number,
    campeonActual: boolean,


}


