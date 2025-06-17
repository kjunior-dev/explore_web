import { Menubar,MenubarMenu,
    MenubarTrigger,
} from "@/src/components/atoms/menubar";
import {IMenuProps} from "@/src/components/home/menu/services";
import Link from "next/link";
import {AvatarComp} from "@/src/components/home/menu/avatar";

export function Menu({data}: { data: IMenuProps}){

    return(
        <Menubar className=' h-[70px] flex justify-between items-center border-none'>
            <Link href="/">
                <img
                    src={'/logo.png'}
                    alt="Logo"
                    className='w-[200px] h-[170px] cursor-pointer'
                />
            </Link>

           <div className='flex gap-x-16 justify-center w-full border-none'>
               {data?.menu?.map(item => (
                   <MenubarMenu key={item.id}>
                       <Link href={item?.url || ""}>
                           <MenubarTrigger className='cursor-pointer'>{item?.title}</MenubarTrigger>
                       </Link>
                   </MenubarMenu>
               ))}
           </div>

            <AvatarComp/>
        </Menubar>
    )
}