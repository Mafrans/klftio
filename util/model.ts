export type Project = {
    name: string;
    summary: string;
    image: string;
}

export const projects: Project[] = [
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
    {
        name: 'Lorem Ipsum',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random'
    },
];

export function toSlug(name: string): string {
    return name.toLowerCase().replace(' ', '-').replace(/[^0-9a-z\-]/g, '');
}