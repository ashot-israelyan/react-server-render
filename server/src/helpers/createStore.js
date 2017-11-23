import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default req => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000',
        headers: { cookie: req.get('cookie') || '' }
    });

    return createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
}