import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const User = sequelize.define<UserInstance>("User", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  phoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
});

export default User;
