export interface IMenuProps {
    logo: string;

    menu: {
        id: number
        title: string;
        url: string;
    }[];
}

export function getMenuData(): IMenuProps {
    return {
        logo: '',
        menu: [
            {
                id: 1,
                title: 'Home',
                url: '/'
            },
            {
                id: 2,
                title: 'Destinos e Hoteis',
                url: '/destinos-hoteis'
            },
            {
                id: 3,
                title: 'Sobre nós',
                url: '/sobre-nos'
            }
        ]
    };
}
