import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionErroneaException1 extends HttpException {

    constructor(private readonly _mensaje) {
        super({
            mensaje: 'Inicio Sesion',
            statusCode: HttpStatus.ACCEPTED,
            detalle: _mensaje
        }, HttpStatus.NOT_FOUND);
    }
}