export const fetcher = (route: string)=> fetch(`http://localhost:3000/${route}`).then((res)=> res.json());


export const api = (route: string, options: RequestInit)=> fetch(`http://localhost:3000/${route}`, options).then((res)=> res.json());