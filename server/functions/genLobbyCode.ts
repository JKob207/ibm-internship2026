export default function genUniqueLobbyCode(map: Map<string, any>): string{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for(let i = 0; i < 6; i++){
        const random = Math.floor(Math.random() * 26);
        code += alphabet[random];
    }
    
    if(map.has(code)){
        return code;
    }else{
        return genUniqueLobbyCode(map);
    }
}