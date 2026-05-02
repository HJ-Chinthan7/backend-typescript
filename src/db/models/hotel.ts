
import { CreationOptional,Model,InferCreationAttributes,InferAttributes } from "sequelize";
import { sequalize } from "./sequelize";
class Hotel extends Model<InferAttributes<Hotel>,InferCreationAttributes<Hotel>>{
    declare id:CreationOptional<number>;
    declare name:string;
    declare location:string;
    declare address:string;
    declare createdAt:CreationOptional<Date>;
    declare updatedAt:CreationOptional<Date>;
    declare deletedAt:CreationOptional<Date|null>;
    declare rating?:number;
    declare rating_count?:number;

};
Hotel.init({
    id:{
        type:"INTEGER",
        autoIncrement:true,
        primaryKey:true,
    },
    name:{
        type:"VARCHAR(255)",
        allowNull:false
    },
    location:{
        type:"VARCHAR(255)",
        allowNull:false
    },
    address:{
        type:"VARCHAR(255)",
        allowNull:false
    },
    deletedAt:{
        type:"DATETIME",
        allowNull:true,
        defaultValue:null
    },
    createdAt:{
        type:"DATETIME",
        allowNull:false,
        defaultValue: new Date()
    },
    updatedAt:{
        type:"DATETIME",
        allowNull:false,
        defaultValue: new Date()
    },
    rating:{
        type:"FLOAT",
        allowNull:true,
        defaultValue:0.0
    },
    rating_count:{
        type:"INTEGER",
        allowNull:true,
        defaultValue:0
    }

},
{
tableName:"hotels",
sequelize:sequalize,
//underscored:true,
timestamps:true
}
);





export default Hotel;


