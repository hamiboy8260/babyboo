
export async function getRequest <T> (url:string) {
    try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return response.json() as T;
    
}
catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data');
}


}
