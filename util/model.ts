export type BlogPost = {

}

export type GalleryItem = {
    name?: string;
    summary?: string;
    image: string;
}

export type Project = {
    name: string;
    summary: string;
    description: string;
    image: string;
    gallery: GalleryItem[];
}

export const blogPosts: BlogPost[] = [

];

export const projects: Project[] = [
    {
        name: 'Lorem',
        summary: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        image: 'https://source.unsplash.com/random',
        gallery: [
            { image: 'https://source.unsplash.com/random' },
            { name: 'Title', image: 'https://source.unsplash.com/random'},
            { name: 'Title', summary: 'Summary', image: 'https://source.unsplash.com/random'},
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
        ]
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: [
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
        ]
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: [
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
        ]
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: [
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
            { image: 'https://source.unsplash.com/random' },
        ]
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: [
            { image: 'https://source.unsplash.com/random' },
        ]
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: []
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: []
    },
    {
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum .',
        summary: 'Lorem ipsum dolor sit amet',
        image: 'https://source.unsplash.com/random',
        gallery: []
    },
];

export function toSlug(name: string): string {
    return name.toLowerCase().replace(' ', '-').replace(/[^0-9a-z\-]/g, '');
}