import { DecodedUser } from '../index';

declare global {
    namespace Express {
        interface Request {
            user?: DecodedUser;
        }
    }
}
