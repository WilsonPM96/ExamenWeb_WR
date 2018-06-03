import {ArgumentMetadata, Injectable} from '@nestjs/common';
import {PeticionErroneaException} from '../excepciones/peticion-erronea.exception';
import * as Joi from 'joi';
import {PeticionErroneaException1} from '../excepciones/peticion-erronea.exception1';

@Injectable()
export class JugadorPipe{

    constructor (private readonly _schema){

    }
    transform (jsonAValidar:any, metadata:ArgumentMetadata){
        const{
            error}
            =Joi.validate(jsonAValidar,this._schema)
        if (error) {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Json no valido'
                },
                10
            );
        } else {
            return jsonAValidar;
        }
    }
}