/**
 * Field
 *
 * @type {Field}
 */
export type Field = "metadata" | "content" | "slug";

/**
 * Post data
 *
 * @type {PostData}
 */
export type PostData = {
    slug?: string;
    metadata?: PostMetadata;
    content?: string;
};

/**
 * Post metadata
 *
 * @type {PostMetadata}
 */
export type PostMetadata = {
    title: string;
    excerpt: string;
    date: string;
    labels: string[];
    coverImage?: string;
    auth: {
        name: string;
        picture: string;
    };
    ogImage?: {
        url: string;
    };
};

/**
 * Skill
 *
 * @type {SkillInfo}
 */
export type SkillInfo = {
    iconPath: string;
    name: string;
    description: string;
}