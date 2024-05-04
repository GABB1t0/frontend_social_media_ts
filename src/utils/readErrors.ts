export const readError = (error) => {
    if(error.code === 'ERR_CANCELED') console.log(error.message);
    if(error.code === 'ECONNABORTED') return { status: 500, statusText:'El servidor ha tardado mucho en responder'};
    if(error?.request.status === 422) return {status: 422, errors: error?.response?.data?.errors}; 
    if(error?.request.status === 403) return {status: 403, statusText: error?.response?.data?.message};
    return { status: error?.request.status, statusText: error?.request.statusText };
}