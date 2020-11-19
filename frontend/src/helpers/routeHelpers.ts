import {isEmpty} from "./utilHelper";

export const getSpecificRoute = (routePath: string, params: any, queries: any): string => {
    const routeAfterUseParams: string = getSpecificRouteWithParams(routePath, params);
    return getSpecificRouteWithQueries(routeAfterUseParams, queries);
};

const getSpecificRouteWithParams = (routePath: string, params: any): string => {
    if (isEmpty(params)) {
        return routePath;
    }
    let resultRoute: string = routePath;
    const paramKeys: string[] = Object.keys(params);
    paramKeys.forEach((paramKey: string) => {
        resultRoute = resultRoute.replaceAll(`:${paramKey}`, params[paramKey]);
    });
    return resultRoute;
};

const getSpecificRouteWithQueries = (routePath: string, queries: any): string => {
    if (isEmpty(queries)) {
        return routePath;
    }
    const queryKeys: string[] = Object.keys(queries);
    const queryParts: string[] = queryKeys.map((queryKey: string) => `${queryKey}=${queries[queryKey]}`);
    const queryStr: string = queryParts.join('&');
    return `${routePath}?${queryStr}`;
}