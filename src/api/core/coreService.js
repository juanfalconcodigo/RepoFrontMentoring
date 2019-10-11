import axios from 'axios';
import { mentoringBaseUrl } from '../../environment';

const Service = axios.create({
    baseURL: mentoringBaseUrl
});

export {
    Service
}