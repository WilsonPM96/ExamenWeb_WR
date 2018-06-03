import {Body, Controller, Get, HttpCode, Param, Post, Put, ReflectMetadata, Req, Res} from '@nestjs/common';
import {EquipofutbolService, EquiposFutbol} from './equipofutbol.service';
import {EquipofutbolPipe} from './equipofutbol.pipe';
import {EQUIPOFUTBOL_SCHEMA} from './equipofutbol.schema';
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {error, log} from "util";

@Controller('Equipo')
export class EquipofutbolController {

    constructor(private _equipofutbolservice: EquipofutbolService) {

    }

    @Get('listarTodos')
    mostrarEquiposFut(
        @Res() response
    ) {
        const sistemas_operativos = this._equipofutbolservice.mostrarEquiposFut();
        return response.send(sistemas_operativos);
    }

   @Post('crearEquipos')
   // @ReflectMetadata('permisos', ['privado'])

    crearEquiposFut(
        @Body(new EquipofutbolPipe(EQUIPOFUTBOL_SCHEMA))
            nuevoEquipo
    ) {

        const EquipoCreado = this._equipofutbolservice.crearEquiposFut(nuevoEquipo);
        return nuevoEquipo;
   }

    @Get(':id')
    obtenerUno(@Param(EQUIPOFUTBOL_SCHEMA.equipoFutbolId) id, @Req() request,
               @Res() response) {
        if(id.content==EQUIPOFUTBOL_SCHEMA.equipoFutbolId){
            const eqp = this._equipofutbolservice.mostrarEquiposFut();
            return response.send(eqp);
        } else {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Los datos ingresados en la ruta /Equipos/# son erroneos'
                },
                10
            );
        }


    }
    @Put(':id')
    editarUno(@Param() id, @Body(new EquipofutbolPipe(EQUIPOFUTBOL_SCHEMA)) updateEquipo, @Req() request,
              @Res() response) {
        console.log(id.id);
        console.log()
        if(id==EQUIPOFUTBOL_SCHEMA.equipoFutbolId){
            const update =this._equipofutbolservice.actualizarEquiposFut(updateEquipo);
            return updateEquipo;
        } else {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Los datos ingresados en la ruta /Equipos/# son erroneos'
                },
                10
            );
        }

    }


}


