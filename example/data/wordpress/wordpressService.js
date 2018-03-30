import request from 'superagent';
import _get from 'lodash/get';
import moment from 'moment';

import BlogPost from './models/BlogPost';
import BlogPostImages from './models/BlogPostImages';

export function getWpBlogBySlug(slug) {
  return new Promise((resolve, reject) => {
    request
      .get(
        `https://classic.onehopewine.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      )
      .end((error, res) => {
        if (error) {
          reject(error);
        } else {
          resolve(res.body[0]);
        }
      });
  });
}

function readableDate(date) {
  return moment(date).format('MM-DD-YYYY');
}

export function getThumbnailPicture(sizes) {
  if (!sizes) return undefined;
  const sizeKeys = Object.keys(sizes);
  if (!sizeKeys.length) return undefined;

  const idealHeight = 400;
  const idealWidth = 400;
  const idealImageScore = idealWidth * idealHeight;

  const thumbnails = sizeKeys.map(imageSize => {
    const { width, height } = sizes[imageSize];
    const score = width * height; // possibly NaN
    return { imageSize, score };
  });

  let bestThumbnail = thumbnails[0];
  let bestScore = idealImageScore;

  for (let i = 0; i < thumbnails.length; i += 1) {
    const distance = Math.abs(idealImageScore - thumbnails[i].score);

    if (distance === 0) {
      bestThumbnail = thumbnails[i];
      break;
    } else if (distance < bestScore) {
      bestScore = distance;
      bestThumbnail = thumbnails[i];
    }
  }

  return sizes[bestThumbnail.imageSize].source_url;
}

export function convertWpBlogPostPayloadToBlogPost(payload) {
  if (!payload) return new BlogPost({ isValidPage: false });
  const {
    _embedded,
    title: { rendered: header },
    date_gmt,
    categories,
    content: { rendered: contentPreparse },
    excerpt: { rendered: excerpt },
    id,
    slug,
  } = payload;
  const sizes = _get(_embedded, 'wp:featuredmedia[0].media_details.sizes');
  const preview = getThumbnailPicture(sizes);
  const hero = _get(sizes, 'full.source_url');
  const images = new BlogPostImages({ preview, hero });
  const content = contentPreparse
    .replace(/www2.onehopewine.com/g, 'www.onehopewine.com') // migrating old blog posts
    .replace(/<img/g, `<img style="max-width:100%"`); // allow ultra wide images to fit on mobile
  // category id 107 is hardcoded to Blog. There are no other categories in ONEHOPE WP Blog.
  const category = categories[0] === 107 ? 'Blog' : 'Blog';
  return new BlogPost({
    category,
    content,
    datePublished: readableDate(date_gmt),
    excerpt: `${excerpt.substring(0, 250)} [...]`,
    header,
    slug,
    id,
    images,
    isValidPage: true,
  });
}
