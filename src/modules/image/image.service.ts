import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Image } from './image.model';

@Injectable()
export class ImageService {
    constructor(private sequelize: Sequelize) {}

    testSequelize() {
        console.log(this.sequelize.models);
        this.sequelize.models.Image.findAll()
            .then((image) => {
                console.log(image);
        });
    }

    async create(image: Image): Promise<Image> {
        try {
            const createdImage = await Image.create({...image});
            return createdImage;
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                throw new HttpException(err.parent.sqlMessage, HttpStatus.CONFLICT);
            }
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
}
