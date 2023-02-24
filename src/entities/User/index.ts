import { User, UserSchema } from './model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { userReducer, userActions } from './model/slice/userSlice';

export {
    User,
    UserSchema,
    getUserAuthData,
    userReducer,
    userActions,
};
