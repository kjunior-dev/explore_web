import {Menu} from "@/src/components/home/menu/menu";
import {getMenuData} from "@/src/components/home/menu/services";

export default async function Home() {
    const data = await getMenuData();

  return (
    <main>
      <Menu data={data}/>
    </main>
  );
}

