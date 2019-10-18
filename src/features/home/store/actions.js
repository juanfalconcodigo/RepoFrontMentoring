import {
    GET_DATA
} from "./constants";

import {
    CourseService,
    coursesUrls
} from '../../../api';

const _courseService = new CourseService();


// GET COURSES
const getOrdersAll = () => dispatch => {

    _courseService.getAllOrders(coursesUrls.listCourses)
        .then(res => {
            /* console.log(res.data.data); */
            dispatch({
                type: GET_DATA,
                payload: res.data
            });
        }).catch(err => {
            console.log(err)
        });
}
export {
    getOrdersAll
}