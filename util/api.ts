export async function apiFetch(path: string): Promise<unknown> {
    const response = await fetch(`http://localhost:1337/${path}`);
    if (response.status < 200 && response.status >= 300) {
        throw new Error(`API returned status code ${response.status} - ${response.statusText}`);
    }

    return await response.json();
}

export type BlogPost = {
    id: number;
    slug: string;
    title: string;
    content: string;
    published_at: string;
    created_at: string;
    updated_at: string;
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