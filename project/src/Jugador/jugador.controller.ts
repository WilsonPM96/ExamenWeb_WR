import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res} from '@nestjs/common';
import {JugadorService} from './jugador.service';
import {JugadorPipe} from './jugador.pipe';
import {JUGADOR_SCHEMA} from './jugador.schema';

@Controller('Jugador')
export class JugadorController {

    constructor (private _jugadorservice: JugadorService){
    }
    @Get("listarTodos")
    mostrarjugador(@Res() response){
            const jug = this._jugadorservice.mostrar_jugador();
            return response.send(jug);
        }

    @Post('crearJugadores')
    crearjugador(@Body(new JugadorPipe(JUGADOR_SCHEMA))
    nuevojug){
        const jugNuevo =this._jugadorservice.crear_jugador(nuevojug);
        return nuevojug;
    }

    @Get(':numero')
    obtenerUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Req() request,
               @Res() response) {
        return response.send(nombre);
    }

    @Put(':numero')
    editarUno(@Param(JUGADOR_SCHEMA.nombre) nombre, @Body(new JugadorPipe(JUGADOR_SCHEMA)) updateApp, @Req() request,
              @Res() response) {
        return response.send(updateApp);
    }

}