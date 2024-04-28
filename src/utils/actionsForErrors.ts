type Props = { 
    status: number, 
    statusText: string
}

export const actionsForErrors = ({status, statusText}:Props) => {

    if(status == 404){
        alert('Ha ocurrido un error');
    }

    // if(status == 403){

    // }
    
    if(status == 401){
        window.location.href = '/login';
    }
    
    if(status == 500){
        alert('Estamos presentando problemas, por favor intente mas tarde');
    }
}

