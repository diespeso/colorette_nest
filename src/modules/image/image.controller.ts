import { Controller, Get, Post, Body } from '@nestjs/common';
import { Image } from './image.model';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
    constructor(private imageServices: ImageService) {}

    @Get()
    getImage(): string {
        this.imageServices.testSequelize();
        return 'testimage';
    }

    @Post()
    async createImage(@Body() image: Image): Promise<Image> {
        console.log(image);
        const createdImage = await this.imageServices.create(image);
        return createdImage;
    }
}
