
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; // Import the imageUrlBuilder

export const client = sanityClient({
  projectId: 'g3agf4zo', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
});

// Initialize the image builder
const builder = imageUrlBuilder(client);

// Define the expected type for the source parameter (Sanity image reference type)
interface ImageSource {
  _type: string;
  asset: { _ref: string };
}

// Create urlFor function to generate image URLs
export const urlFor = (source: ImageSource) => builder.image(source);
