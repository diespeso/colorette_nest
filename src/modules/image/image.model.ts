import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Image extends Model {
    @Column({ primaryKey: true })
    uuid: string;
    @Column
    name: string;
    @Column
    user_id: number;
}