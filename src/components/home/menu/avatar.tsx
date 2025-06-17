import {Avatar, AvatarFallback, AvatarImage} from "@/src/components/atoms/avatar";

export function AvatarComp(){
    return(
        <Avatar className="w-[50px] h-[50px]">
            <AvatarImage src="https://github.com/joaoMota18.png" alt=""/>
            <AvatarFallback>HC</AvatarFallback>
        </Avatar>
    )
}