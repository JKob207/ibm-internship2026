import type { JwtPayload } from "jsonwebtoken";
import type { User } from "./database/models/User.js";

export interface ClientToServerEvents{
    "create-room": ( 
        callback: (response: {
            success: boolean; 
            room?: Room;
        }) => void
    ) => void;
    "join-room": (
        roomId: string,
        callback: (response: {
            success: boolean; 
            room?: Room;
            message?: string;
        }) => void
    ) => void;
}

export interface ServerToClientEvents{
    "room-updated": (room: Room) => void;
}

export interface InterServerEvents{

}

export interface SocketData{
    user: JwtPayload;
}

export interface Room{
    id: string;
    users: {
        id: string, //(socket.id)
        username: string,
        host: boolean,
    }[];
    maxPlayers: number;
    status: string;
}