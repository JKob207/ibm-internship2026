import type { JwtPayload } from "jsonwebtoken";
import type { User } from "./database/models/User.js";

export interface ClientToServerEvents{
    "create-room": (roomId: string, username: string) => void;
    "join-room": (roomId: string, username: string) => void;
}

export interface ServerToClientEvents{
    "room-updated": (room: Room) => void;
}

export interface InterServerEvents{

}

export interface SocketData{
    user: string | JwtPayload | undefined;
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