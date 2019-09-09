import { createContext } from '@marblejs/core';
import request from 'supertest';

import httpListener from '../http.listener';

export const app = request(httpListener.run(createContext()));
