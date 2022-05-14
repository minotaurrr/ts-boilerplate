import { UserService } from 'services/user';
import { UserRouter } from './router';

const service = UserService();
const router = UserRouter({ service });

export { router as UserRouter };
