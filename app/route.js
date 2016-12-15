/**
 * Created by paulzeng on 16/11/13.
 */
import {
    Navigator,
} from 'react-native';

const routeMap = new Map();

export function registerNavigator(tempNavigator) {
    if (navigator) {
        return;
    }
    navigator = tempNavigator;
}

export function getNavigator() {
    return navigator;
}

export function getRouteMap() {
    return routeMap;
}
