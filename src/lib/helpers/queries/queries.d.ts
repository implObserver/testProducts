interface EmulateResponse {
    id: string,
    message: string,
    isError: boolean,
    data: ResponseData,
}

interface EscuelajsResponse {
    status: number,
    data: EscuelajsProduct[],
}

interface ResponseData {
    status: number,
    message: any,
}